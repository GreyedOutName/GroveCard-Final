import * as React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SLIDER_WIDTH, ITEM_WIDTH } from '../code/carouselCardItem';
import { decks } from '../code/data';
import Flashcard from '../code/flashcards';
import CarouselCards from '../code/carouselCards';
import { useNavigation } from '@react-navigation/native';  
import { selectedDeck,setSelectedDeck } from '../code/data';

export default function Search() {
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const navigation = useNavigation();  

  const handleClear = () => {
    setSearchText('');
    setSearchResults([]);
  };

  const handleSearch = (query) => {
    setSearchText(query);
    filterDecks(query);
  };

  const filterDecks = (query) => {
    const filteredDecks = decks.filter((deck) =>
      deck.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredDecks);
  };

  const renderResultItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => handleResultPress(item)}>
      <Text style={styles.resultItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleResultPress = (item) => {
    setSelectedDeck({...item});  
    navigation.navigate('View Screen');  
  };

  return (
    <ImageBackground
      source={require('../assets/JungleBg.gif')}
      style={styles.container}
    >
        <View style={styles.SearchBar}>
          <Icon name='search-outline' style={styles.searchIcon} />
          <TextInput
            style={{ flex: 1, margin: 10, marginLeft: 5, fontSize: 16 }}
            placeholder='Search'
            value={searchText}
            onChangeText={(text) => handleSearch(text)}
          />
          {searchText ? (
            <TouchableOpacity onPress={handleClear} style={styles.closeIconContainer}>
              <Icon name='close-outline' style={styles.closeIcon} />
            </TouchableOpacity>
          ) : null}
        </View>


      {searchText === '' ? (
        <Text style={styles.l1}>Try searching your school!</Text>
      ) : (
        <View style={styles.resultContainer}>
          <FlatList
            data={searchResults}
            renderItem={renderResultItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10
  },
  SearchBar: {
    marginTop: 10,  // Adjusted to add top margin
    marginHorizontal: '10%',
    height: 50,
    width: '90%',
    backgroundColor: '#ece3ce',
    borderRadius: 50,
    flexDirection: 'row',
    borderColor: '#3A4D39',
    borderWidth: 1,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultContainer: {
    flex: 1,
    marginTop: 5, 
    width: '90%',
  },
  resultItem: {
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultItemText: {
    fontSize: 16,
    color: '#ece3ce',
    fontFamily: 'monospace',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
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
    fontWeight: '700',
    color: '#ece3ce',
    textAlign: 'left',
    width: 295,
    height: 23,
    left: 15,
    margin: 10,
    fontFamily: 'monospace',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});