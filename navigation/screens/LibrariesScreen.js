import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import Flashcard from '../code/flashcards';
import { decks } from '../code/data';
import { setSelectedDeck } from '../code/data';
import { SLIDER_WIDTH, ITEM_WIDTH } from '../code/carouselCardItem';
import CarouselCards from '../code/carouselCards';
import { currentUser } from '../code/creatorData';

export default function LibrariesScreen({ navigation }) {
  const [filter, setFilter] = useState(''); 
  const handleDeckPress = (deck) => {
    setSelectedDeck(deck);
    navigation.replace("View Screen")
  };

  const filterhandler=()=>{
    if(filter==='favorite'){
      let temp = decks.filter((deck) => deck[filter.toLowerCase()] === 'yes')
      return temp;
    }
    else if(filter==='My GroveCards'){
      let temp = decks.filter((deck) => deck.author === currentUser.uname)
      return temp;
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.filterc}>
      <TouchableOpacity onPress={() => handleDeckPress(item)} style={styles.deckContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.flash} source={require('../assets/flashcard.png')} />
        </View>
        <View style={styles.info}>
          <Text style={styles.infotext}>{item.name}</Text>
          <View style={styles.info2}>
            <Text style={styles.infotext2}>{item.items} items</Text>
            <Text style={styles.infotext2}>@{item.author}</Text>
            <Text style={styles.infotext2}>{item.code}</Text>
            <Text style={styles.infotext2}>{item.course}</Text>
            <Text style={styles.infotext2}>{item.school}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground source={require('../assets/JungleBg.gif')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View>
            <View style={styles.buttonContainer}>

              <TouchableOpacity
                style={styles.button}
                onPress={() => setFilter('favorite')}
              >
                <Text style={styles.buttonText}>Favorites</Text>
              </TouchableOpacity>

              <TouchableOpacity
                    style={styles.button1}
                    onPress={() => setFilter('My GroveCards')}
                >
                    <Text style={styles.buttonText}>My GroveCards</Text>
                </TouchableOpacity>
            </View>
          </View>

          <View style={styles.flcontainer}>
          <FlatList style={styles.flatlist} showsVerticalScrollIndicator={false}
            data={filterhandler()}
            renderItem={renderItem}
            />
          </View>

      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover', 
        justifyContent: 'center',
    },
    scrollContainer:{
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center', 
        margin: 10
      },
    button: {
      backgroundColor: '#ECE3CE',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 16,
      margin: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button1: {
      backgroundColor: '#ECE3CE',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 16,
      margin: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4F6F52',
        fontFamily: 'monospace'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4F6F52',
        fontFamily: 'monospace'
    },
    deckContainer: {
        width: '100%',
        height: 170, // Set height equal to width
        marginHorizontal: 8, // Adjust margin as needed
        borderRadius: 12,
        backgroundColor: '#ECE3CE',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
      flash: {
        width: '90%', // Set the width to fill the container
        height: '100%', // Set the height to fill the container
        position: 'absolute',
        left: 50,
        alignContent: 'flex-end',
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
        position: 'absolute',
        width: 200,
      },
      infotext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4F6F52',
      },
      infotext2: {
        fontSize: 10,
        color: '#4F6F52',
      },
      filterc: {
        padding: 10,
        alignItems: 'center',
      },
      flatlist: {
        width: 300,
        paddingBottom: 150,
    
      },
      flcontainer:{
        alignItems: 'center'
      },
      imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 8, // or your desired border radius
        overflow: 'hidden',
      },
});
