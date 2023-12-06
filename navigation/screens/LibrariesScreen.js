import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { decks } from '../code/data';
import { setSelectedDeck } from '../code/data';
import { SLIDER_WIDTH, ITEM_WIDTH } from '../code/carouselCardItem';
import CarouselCards from '../code/carouselCards';

export default function LibrariesScreen({ navigation }) {
  const [filter, setFilter] = useState('');

  const handleDeckPress = (deck) => {
    setSelectedDeck(deck);
    navigation.replace('View Screen');
  };

  const renderItem = ({ item }) => (
    <View style={styles.filterc}>
      <TouchableOpacity onPress={() => handleDeckPress(item)} style={styles.deckContainer}>
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

  return (
    <ImageBackground source={require('../assets/JungleBg.gif')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.button} onPress={() => setFilter('created')}>
              <Text style={styles.buttonText}>Created</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setFilter('favorite')}>
              <Text style={styles.buttonText}>Favorite</Text>
            </TouchableOpacity>
          </View>

          {/* FlatList */}
          <FlatList
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            data={decks.filter((deck) => deck[filter.toLowerCase()] === 'yes')}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  button: {
    backgroundColor: '#ECE3CE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatlist: {
    width: 300,
    marginTop: 60, // Adjust as needed
  },
  filterc: {
    padding: 10,
  },
  deckContainer: {
    width: ITEM_WIDTH,
    height: 170, // Set height equal to width
    marginHorizontal: 8, // Adjust margin as needed
    borderRadius: 8,
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
    width: 200,
    height: 170,
    position: 'absolute',
    flex: 1,
    left: 50,
    alignContent: 'flex-end',
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
    top: 70,
    left: 0,
    position: 'absolute',
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
});
