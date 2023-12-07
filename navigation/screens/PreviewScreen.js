import React, { useEffect ,useState} from 'react';
import { FlatList, Image, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, Modal, TextInput,SafeAreaView} from 'react-native';
import { calendarContent, decks } from '../code/data';
import { selectedDeck } from '../code/data';
import { ITEM_WIDTH } from '../code/carouselCardItem';
import { currentUser } from '../code/creatorData';



export const getWidth = Dimensions.get('window').width + 8
export const iwidth = Math.round(getWidth*0.7)

export default function PreviewScreen({ navigation }) {
  const [selectedCard,setSelectedCard]=useState('');
  const [newQuestion,setNewQuestion]=useState('');
  const [newAnswer,setNewAnswer]=useState('');
  const [isModalVisibleFlashcard, setIsModalVisibleFlashcard] = useState(false);
  const [isFavorite, setIsFavorite] = useState(selectedDeck.favorite==='yes');

  const handleDeleteCard=()=>{
    if(selectedDeck.author===currentUser.uname){
      index=selectedDeck.flashcards.indexOf(selectedCard);
      selectedDeck.flashcards.splice(index,1);
    }
    else{
      alert('Cannot modify, as you are not the author of this GroveCard')
    }
  }
  const handleEditCard=()=>{
      selectedCard.frontContent=newQuestion;
      selectedCard.backContent=newAnswer;
      toggleModalFlashcard();
  }
  const handleAddCard=()=>{
    if(selectedDeck.author===currentUser.uname){
      navigation.navigate('Add Card')
    }
    else{
      alert('Cannot modify, as you are not the author of this GroveCard')
    }
  }
  const toggleModalFlashcard = () => {
    setNewQuestion(selectedCard.frontContent);
    setNewAnswer(selectedCard.backContent);
    if(selectedDeck.author===currentUser.uname){
      setIsModalVisibleFlashcard(!isModalVisibleFlashcard);
    }
    else{
      alert('Cannot modify, as you are not the author of this GroveCard')
    }
  };
  const handleFavorite=()=>{
    if(selectedDeck.favorite==='yes'){
      selectedDeck.favorite='no';
    }
    else{
      selectedDeck.favorite='yes'
    }
  }
  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    handleFavorite();
  };

  const renderQuestion = ({ item }) => (
    <View style={styles.viewPadding}>
      <TouchableOpacity style={styles.deckContainer} onPress={() => setSelectedCard(item)}>
          <View style={styles.info2}>
            <Text style={styles.infotext2}>
              {item.frontContent.length > 50? 
              item.frontContent.replace(/^(.{1,50})\s/, '$1\n'): item.frontContent}
              </Text>
          </View>
      </TouchableOpacity>
    </View>
  );
  
  const renderAnswer = ({ item }) => (
    <View style={styles.viewPadding}>
      <TouchableOpacity style={styles.deckContainer} onPress={() => setSelectedCard(item)}>
          <View style={styles.info2}>
            <Text style={styles.infotext2}>
            {item.backContent.length > 50? 
            item.backContent.replace(/^(.{1,50})\s/, '$1\n') : item.backContent}
              </Text>
          </View>
      </TouchableOpacity>
    </View>
  );

    return(
      <ScrollView contentContainerStyle = {styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={[styles.rectangleView, styles.shadow]}>
                <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('Main')}>
                    <Image style={styles.icon} source={require("../assets/back.png")}/>
                </TouchableOpacity>
                <Text style={styles.l1}>Preview Screen</Text>
        </View>

        <SafeAreaView style={styles.PreviewContainer}>

        <View style={styles.container}>
          <Text style={styles.subtext}>{selectedDeck.course}</Text> 
          <Text style={styles.titletext}>{selectedDeck.name}</Text>

          <TouchableOpacity
          style={styles.favoritebtn}
          onPress={handleFavoriteToggle}>
          <Image
            source={require('../assets/star.png')}
            style={[styles.logo, isFavorite && { tintColor: '#00AD7C' }]}
          />
          <Text style={styles.buttonText}>
            {isFavorite ? 'Marked as Favorite' : 'Mark as Favorite'}
          </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.alignedContainer}>
              <TouchableOpacity style={styles.minibutton} onPress={()=>handleAddCard()}>
              <Text style={styles.buttonText2}>Add</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.minibutton} onPress={()=>toggleModalFlashcard()}>
              <Text style={styles.buttonText2}>Edit</Text>
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisibleFlashcard}
                onRequestClose={() => {
                  toggleModalFlashcard();
                }}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Edit Flashcard</Text>
                    <TextInput
                      style={styles.modalInput}
                      placeholder="Question"
                      value={newQuestion}
                      onChangeText={(text) => setNewQuestion(text)}
                    />
                    <TextInput
                      style={styles.modalInput}
                      placeholder="Answer"
                      value={newAnswer}
                      onChangeText={(text) => setNewAnswer(text)}
                    />
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={()=>handleEditCard()}
                    >
                      <Text style={styles.modalButtonText}>Edit Flashcard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={toggleModalFlashcard}
                    >
                      <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              <TouchableOpacity style={styles.minibutton} onPress={()=>handleDeleteCard()}>
              <Text style={styles.buttonText2}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Play Screen')}>
                <Image source={require('../assets/play.webp')} style={{ width: 40, height: 40 }} />
              </TouchableOpacity>


        </View> 

        <View style = {styles.flowContainer}>
           <FlatList 
           style={styles.flatlist} 
           showsVerticalScrollIndicator={false}
           data={selectedDeck.flashcards}
           scrollEnabled={false}
            renderItem={renderQuestion}
            />
            <FlatList 
           style={styles.flatlist} 
           showsVerticalScrollIndicator={false}
           scrollEnabled={false}
           data={selectedDeck.flashcards}
            renderItem={renderAnswer} 
            />
        </View>
        </SafeAreaView>
      </ScrollView>
    );
}

const styles = StyleSheet.create({ 
  PreviewContainer:{
      flex: 1,
  },
  scrollContainer:{
      backgroundColor: '#ECE3CE',
      paddingTop: 50,
  },
  container: {
      justifyContent: 'space-evenly',
      padding: 30,
      marginTop: 30,
     
  },
  flatlist: {
      paddingBottom: 150
    },
  button: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 5,
      margin: 10,
  },
  minibutton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 3,
    margin: 3,
    top: 10,
  },
  playbtn: {
    width: 100,
    height: 50,
    borderRadius: 16,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00AD7C',

  },
  play:{
    fontSize: 16,
    fontWeight: 'bold',
    color: "#00ad7c",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#00ad7c",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    left: 10,
  },
  buttonText2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(0, 173, 124, 0.65)',
    left: -5,
  },
  viewPadding: {
    paddingBottom:10,
  
    
  }, 
  deckContainer: {
    width: 190,
    height: 170, 
    marginHorizontal: 8, 
    borderRadius: 8,
    backgroundColor: '#00AD7C',
    shadowColor: '#000',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  info: {
    flex: 1,
    padding: 10,
    top: 5,
    position: 'absolute',

  },
  info2: {
    flex: 1,
    padding: 10, 
    width: '60%',
    position: 'absolute',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 8,
  },
  infotext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A4D39',
    
  },
  infotext2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ECE3CE',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'monospace',
  },
  subtext: {
    fontSize: 16,
    color: "#4f6f52",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 'auto',
    height: 30,
  },
  titletext: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: "600",
    color: "#1f271e",
    textAlign: "left",
    alignItems: "center",
    width: 'auto',
  },
  flowContainer:{
    flexDirection: 'row', 
    alignContent: 'center',
    marginTop: 20,
    paddingBottom: 10,
    
    
  },
  alignedContainer:{
    flexDirection: 'row', 
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  modalButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  favoritebtn:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
    width: '60%',
  },
  logo:{
    width: 20,
    height: 20,
  },
  rectangleView: {
    backgroundColor: "#ece3ce",
    borderStyle: "solid",
    borderColor: "rgba(31, 39, 30, 0)",
    borderBottomWidth: 1,
    width: "100%",
    height: 90,
    paddingTop: 40,
    padding: 15,
    flexDirection: 'row',
    position: 'absolute', 
    top: 0, 
    zIndex: 1,
    shadowColor: '#7F5F0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
   },
  back: {
    height: 50,
    marginRight: 20,
  },
  icon: {
    height: 37,
    width: 25,
  },
  l1: {
    fontSize: 22,
    color: '#00AD7C',
  },
})
