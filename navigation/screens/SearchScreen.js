import * as React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SLIDER_WIDTH, ITEM_WIDTH } from '../code/carouselCardItem';
import { decks } from '../code/data';
import Flashcard from '../code/flashcards';
import CarouselCards from '../code/carouselCards';

export default function Search({ navigation }) {
  const [searchText, setSearchText] = React.useState('');

  const handleClear = () => {
    setSearchText('');
  };

  return (
    <ImageBackground
    source={require('../assets/JungleBg.gif')}
    style={styles.SearchContainer}>
      <View style={styles.SearchBar}>
        <Icon name='search-outline' style={styles.searchIcon} />
        <TextInput
          style={{ flex: 1, margin: 10, marginLeft: 5, fontSize: 16 }}
          placeholder='Search'
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        {searchText ? (
          <TouchableOpacity onPress={handleClear} style={styles.closeIconContainer}>
            <Icon name='close-outline' style={styles.closeIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View>
        <Text style={styles.l1}>Try searching your school!</Text>
      </View>
      <View>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  SearchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SearchBar: {
    margin: 10,
    height: 50,
    width: '80%',
    top: -335,
    backgroundColor: '#ece3ce',
    borderRadius: 50,
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 5,
    color: '#527746',
    fontSize: 30,
  },
  closeIconContainer: {
    padding: 8,
  },
  closeIcon: {
    color: '#527746',
    fontSize: 30,
  },
  l1: {
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: '30',
    color: '#ece3ce',
    textAlign: 'left',
    width: 295,
    height: 23,
    left: 20,
    margin: 10,
    top: -330,
    left: -25
  },
});