import * as React from 'react';
import {  FlatList, Image, View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import { decks } from '../code/data';
import { ITEM_WIDTH } from '../code/carouselCardItem';

export const getWidth = Dimensions.get('window').width + 8
export const iwidth = Math.round(getWidth*0.7)

export default function PreviewScreen({navigation}){

  const renderQuestion = ({ item }) => ( //for question data
    <View style={styles.viewPadding}>
        <TouchableOpacity style={styles.deckContainer}>
            <View style={styles.info}> 
                <Text style={styles.infotext}>{item.name}</Text>
                <View style={styles.info2}>
                    <Text style={styles.infotext2}>{item.items} items</Text>
                    <Text style={styles.infotext2}>{item.author}</Text>
                    <Text style={styles.infotext2}>{item.code}</Text>
                    <Text style={styles.infotext2}>{item.course}</Text>
                    <Text style={styles.infotext2}>{item.school}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  );

  const renderAnswer = ({ item }) => ( //for answer data
    <View style={styles.viewPadding}>
        <TouchableOpacity style={styles.deckContainer}>
            <View style={styles.info}> 
                <Text style={styles.infotext}>{item.name}</Text>
                <View style={styles.info2}>
                    <Text style={styles.infotext2}>{item.items} items</Text>
                    <Text style={styles.infotext2}>{item.author}</Text>
                    <Text style={styles.infotext2}>{item.code}</Text>
                    <Text style={styles.infotext2}>{item.course}</Text>
                    <Text style={styles.infotext2}>{item.school}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  );

    return(
      <ScrollView contentContainerStyle = {styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.subtext}>Subject</Text> 
          <Text style={styles.titletext}>Title</Text>
          <Text style={styles.subtext2}>Flashcard</Text>
          <TouchableOpacity>
             <Text style={styles.buttonText}>Mark as Favorite</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.alignedContainer}>
              <TouchableOpacity style={styles.minibutton}>
              <Text style={styles.buttonText2}>Add</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.minibutton}>
              <Text style={styles.buttonText2}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.minibutton}>
              <Text style={styles.buttonText2}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.minibutton}>
              <Text style={styles.buttonText2}>Play</Text>
              </TouchableOpacity>
        </View> 

        <View style = {styles.flowContainer}>
           <FlatList 
           style={styles.flatlist} 
           showsVerticalScrollIndicator={false}
           data={decks}
            renderItem={renderQuestion} //note: idk if there's an existing deck of cards but just replace the contents with em on 
            />
            <FlatList 
           style={styles.flatlist} 
           showsVerticalScrollIndicator={false}
           data={decks}
            renderItem={renderAnswer} //note: idk if there's an existing deck of cards but just replace the contents with em on 
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
})

