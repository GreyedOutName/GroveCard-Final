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
  const [searchText, setSearchText] = React.useState('HomeScreenSelect');
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
      <View style={styles.searchContainer}>
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
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingBottom: 10
  },
  searchContainer: {
    width: '80%',
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  SearchBar: {
    height: 50,
    backgroundColor: '#ece3ce',
    borderRadius: 50,
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    marginTop: 70, 
    width: '80%',
  },
  resultItem: {
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultItemText: {
    fontSize: 16,
    color: '#fff',
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
    textAlign: 'center',
    width: 295,
    height: 23,
    margin: 85,
    left: -25,
  },
});