import React, { useState } from 'react';
import {  FlatList, View, StyleSheet, Text, ImageBackground, ScrollView,} from 'react-native';
import { decks } from '../code/data';


export default function ViewScreen(){

    const handleDeckPress = (deck) => {
      setSelectedDeck(deck);
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.filterc}>
          <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
              <Image style={styles.flash} source={require('../assets/flashcard.png')} />
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
      <ScrollView>
        <ImageBackground source={require('../assets/JungleBg.gif')} style={styles.backgroundImage}>
        <View>
            <Text>
                <SafeAreaView>
                  <View>
                     <FlatList style={styles.flatlist} showsVerticalScrollIndicator={false}
                       data={decks.filter((deck) => deck[filter.toLowerCase()] === 'yes')}
                       renderItem={renderItem}
                       />
                  </View>
                </SafeAreaView>
            </Text>
        </View>
        </ImageBackground>
      </ScrollView>
          
    );
}

const styles = StyleSheet.create({

    scrollContainer:{
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#ECE3CE',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    flatlist: {
        width: 300,
        paddingBottom: 150
      },
})

