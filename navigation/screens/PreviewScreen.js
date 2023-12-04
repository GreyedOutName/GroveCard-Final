import React, { useEffect } from 'react';
import { FlatList, Image, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions, Modal, TextInput } from 'react-native';
import { calenderContent, decks } from '../code/data';
import { selectedDeck } from '../code/data';
import { ITEM_WIDTH } from '../code/carouselCardItem';
import { currentUser } from '../code/creatorData';


export const getWidth = Dimensions.get('window').width + 8
export const iwidth = Math.round(getWidth*0.7)

export default function PreviewScreen({ navigation }) {
  const [selectedCard,setSelectedCard]=React.useState();
  const [newQuestion,setNewQuestion]=React.useState();
  const [newAnswer,setNewAnswer]=React.useState();
  const [isModalVisibleFlashcard, setIsModalVisibleFlashcard] = React.useState(false);

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
    if(selectedDeck.author===currentUser.uname){
      setIsModalVisibleFlashcard(!isModalVisibleFlashcard);
    }
    else{
      alert('Cannot modify, as you are not the author of this GroveCard')
    }
  };
  const handleFavorite=()=>{
    selectedDeck.favorite='yes';
  }

  const handletemp=()=>{
    var d = new Date();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
          month = '0' + month;
    if (day.length < 2) 
          day = '0' + day;
  
    var formatdate=[year, month, day].join('-');
    
    if(Object.keys(calenderContent).includes(formatdate)){
      let temp={text:'You completed deck '+selectedDeck.name+' at this date.'}
      calenderContent[formatdate].push(temp);
    }
    else{
      let temp={
        [formatdate]:[{ text: 'You completed deck '+selectedDeck.name+' at this date.' }],
      }
  
      Object.assign(calenderContent,temp);
    }
    navigation.navigate('Main');
  }
  

  const renderQuestion = ({ item }) => (
    <View style={styles.viewPadding}>
      <TouchableOpacity style={styles.deckContainer} onPress={() => setSelectedCard(item)}>
        <View style={styles.info}>
          <Text style={styles.infotext}>{selectedDeck.name}</Text>
          <View style={styles.info2}>
            <Text style={styles.infotext2}>{item.frontContent}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
  
  const renderAnswer = ({ item }) => (
    <View style={styles.viewPadding}>
      <TouchableOpacity style={styles.deckContainer} onPress={() => setSelectedCard(item)}>
        <View style={styles.info}>
          <Text style={styles.infotext}>{selectedDeck.name}</Text>
          <View style={styles.info2}>
            <Text style={styles.infotext2}>{item.backContent}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

    return(
      <ScrollView contentContainerStyle = {styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.subtext}>{selectedDeck.course}</Text> 
          <Text style={styles.titletext}>{selectedDeck.name}</Text>
          <Text style={styles.subtext2}>Flashcard</Text>
          <TouchableOpacity onPress={()=>handleFavorite()}>
             <Text style={styles.buttonText}>Mark as Favorite</Text>
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

              <TouchableOpacity style={styles.minibutton}>
              <Text style={styles.buttonText2}>Play</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.minibutton} onPress={handletemp}>
              <Text style={styles.buttonText2}>Back</Text>
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
      </ScrollView>
          
    );
}

const styles = StyleSheet.create({ 

    scrollContainer:{
        backgroundColor: '#ECE3CE',
        paddingTop: 20,
    },
    container: {
        justifyContent: 'space-evenly',
        padding: 30,
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
  },
    buttonText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#526D84',
    },
    buttonText2: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#526D84',
    },
    viewPadding: {
      padding: 10,
    }, 
    deckContainer: {
      width: iwidth,
      height: 170, // Set height equal to width
      marginHorizontal: 8, // Adjust margin as needed
      borderRadius: 8,
      backgroundColor: '#C9755E',
      shadowColor: '#000',
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
      position: 'absolute'
    },
    info2: {
      flex: 1,
      padding: 10,
      top: 70,
      left: 0,
      position: 'absolute'
    },
    infotext: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4F6F52',
    },
    infotext2: {
      fontSize: 10,
      color: '#4F6F52',
    },
    subtext: {
      fontSize: 20,
      color: '#4F6F52',
    },
    subtext2: {
      fontSize: 25,
      color: '#4F6F52',
    },
    titletext: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#4F6F52',
    },
    flowContainer:{
      flexDirection: 'row', 
      alignContent: 'center',
      paddingBottom: 10
    },
    alignedContainer:{
      flexDirection: 'row', 
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
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
})

