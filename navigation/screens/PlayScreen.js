import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    Image
  } from 'react-native';
import { selectedDeck } from '../code/data';
import { calendarContent } from '../code/data';

export const getHeight = Dimensions.get('window').height + 60
export const getWidth = Dimensions.get('window').width + 100
export const iwidth = Math.round(getWidth*0.7)


export default function PlayScreen({navigation}){
  const[currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score,setScore]=useState(1)

  const flashIndex = selectedDeck.flashcards.length;
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCalendar=()=>{
    var d = new Date();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();
    if (month.length < 2) 
          month = '0' + month;
    if (day.length < 2) 
          day = '0' + day;
  
    var formatdate=[year, month, day].join('-');
    
    if(Object.keys(calendarContent).includes(formatdate)){
      let temp={text:'You completed deck '+selectedDeck.name+' at this date.'}
      calendarContent[formatdate].push(temp);
    }
    else{
      let temp={
        [formatdate]:[{ text: 'You completed deck '+selectedDeck.name+' at this date. '+score+'/'+flashIndex}],
      }
  
      Object.assign(calendarContent,temp);
    }
  }

  const handleEnd=()=>{
    setScore(score-1);
    if(score<4){
      alert('Your score is '+score+'/'+flashIndex+', Better luck next time!')
    }
    else{
      alert('Your score is '+score+'/'+flashIndex+', GoodJob!')
    }
    handleCalendar();
    navigation.goBack();
  }
  
const renderQuestion = ({ item }) => ( //for question data

    <View style={styles.viewPadding}>
        <TouchableOpacity style={styles.deckContainer} onPress={flipCard}>
            <View style={styles.body}> 
              {isFlipped? (
                 <Text style={styles.flashtext}>{item.frontContent}</Text>
              ) : (
                 <Text style={styles.flashtext}>{item.backContent}</Text>
              )}
                  
            </View>
        </TouchableOpacity>
    </View>
  );
                
  const correct = () =>{
     nextIndex = currentIndex + 1;
     nextScore = score+1;
       if (nextIndex < flashIndex) {
          setCurrentIndex(nextIndex);
          setIsFlipped(false)
          setScore(nextScore)
       }
       else{
        setScore(nextScore);
        handleEnd();
       }
  } 

  const incorrect = () =>{
     nextIndex = currentIndex + 1;
    if (nextIndex < flashIndex) {
       setCurrentIndex(nextIndex);
       setIsFlipped(false)
    }
    else{
      handleEnd();
    }
  }   

   return(
    <View style={styles.Container}>
      <View style={[styles.rectangleView, styles.shadow]}>
                <TouchableOpacity style={styles.back} onPress={()=>navigation.goBack()}>
                    <Image style={styles.icon} source={require("../assets/back.png")}/>
                </TouchableOpacity>
                <Text style={styles.l1}>{selectedDeck.name}</Text>
      </View>

      <SafeAreaView style={styles.body}>
           <Text style={[styles.body,styles.text]}>{currentIndex + 1}/{flashIndex}</Text>
           <FlatList 
            style={styles.deckContainer} 
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            data={[selectedDeck.flashcards[currentIndex]]}
            renderItem={renderQuestion}
            extraData={isFlipped}
            keyExtractor={(item, index) => index.toString()}
            />
      </SafeAreaView>
      
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={()=>incorrect()}>
            <Text style={styles.icons}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={()=>correct()}>
            <Text style={styles.icons}>✔</Text>
          </TouchableOpacity>
      </View>
    </View>
    );
}
const styles = StyleSheet.create({ 

Container:{
  backgroundColor: '#ECE3CE',
  height: getHeight
},
body:{
  paddingTop: 70,
  textAlign: 'center',
  justifyContent: 'space-between',
  alignContent:'center'
},
buttonContainer:{
  paddingTop: 30,
  flexDirection: 'row',
  textAlign: 'center',
  justifyContent: 'center',
  alignContent:'center'
},
button1: {
  backgroundColor: '#ECE3CE',
  paddingVertical: 20,
  paddingHorizontal: 70,
  borderRadius: 5,
  margin: 10,
},
button2: {
  backgroundColor: '#52D681',
  paddingVertical: 20,
  paddingHorizontal: 70,
  borderRadius: 5,
  margin: 10,
},
text: {
  fontSize: 30,
  fontWeight:'bold',
  color: '#4F6F52',
  paddingBottom: 40
},
flashtext: {
  alignSelf:'center',
  fontSize: 30,
  fontWeight:'bold',
  color: '#4F6F52',
  paddingBottom: 40
},
icons: {
  fontSize: 25,
  fontWeight:'bold',
  color: '#4F6F52',
},
l1: {
  fontSize: 22,
  color: '#00AD7C',
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
},
icon: {
  height: 37,
  width: 25,
},
back: {
  height: 50,
  marginRight: 20,
},
deckContainer: {
  width: iwidth,
  height: 300, // Set height equal to width
  borderRadius: 10,
  alignSelf: 'center',
  backgroundColor: '#52D681',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
shadow: {
  shadowColor: '#7F5F0',
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  elevation: 5,
},
})