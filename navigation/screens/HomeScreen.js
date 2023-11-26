import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { SLIDER_WIDTH, ITEM_WIDTH } from '../code/carouselCardItem';
import { decks } from '../code/data';
import Flashcard from '../code/flashcards';
import CarouselCards from '../code/carouselCards';

const App = ({ navigation }) => {
  const [selectedDeck, setSelectedDeck] = useState(decks[0]);
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const handleDeckPress = (deck) => {
    setSelectedDeck(deck);
  };

  return (
    <ImageBackground source={require('../assets/JungleBg.gif')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          <Text style={[styles.l1, { top: 10 }]}>Hello, there!</Text>
          <Text style={[styles.l2, { top: 10 }]}>What do you want to learn today?</Text>

          <View style={[styles.c2]}>

            <Text style={styles.c2l1} numberOfLines={2}>
              Plant seeds of wisdom {'\n'}one flashcard at a time!
            </Text>

            <TouchableOpacity style={styles.c2l2} onPress={() => navigation.navigate('Create')}>
            <Text style={{ color: '#ECE3CE' }}>Create a study set now!</Text>
            </TouchableOpacity>


            <Image style={styles.homechar} source={require('../assets/home_char.png')} />

          </View>

              <View style={styles.flashcardcontainer} id='choice'>
                <Text style={[styles.l3]} >Editor's Choice</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'choice')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                  </View>
              </View>

              <View style={styles.flashcardcontainer} id='business'>
                <Text style={[styles.l3]}>Business and Entrepreneurship</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'business')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                    </View>
                </View>

              <View style={styles.flashcardcontainer} id='communication'>
                <Text style={[styles.l3]} >Communication and Media</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'communication')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                  </View>
              </View>

              <View style={styles.flashcardcontainer} id='computer'>
                <Text style={[styles.l3]} >Computer Science</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'computer')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                  </View>
              </View>

              <View style={styles.flashcardcontainer} id='engineering'>
                <Text style={[styles.l3]} >Engineering</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'engineering')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                  </View>    
              </View>

              <View style={styles.flashcardcontainer} id='health'>
                <Text style={[styles.l3]} >Health Sciences</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'health')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                  </View>
              </View>

              <View style={styles.flashcardcontainer} id='mathematics'>
                <Text style={[styles.l3]} >Mathematics and Statistics</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'mathematics')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                  </View>
              </View>

              <View style={styles.flashcardcontainer} id='natural'>
                <Text style={[styles.l3]} >Natural Sciences</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'natural')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                  </View>
              </View>

              <View style={styles.flashcardcontainer} id='social'>
                <Text style={[styles.l3]} >Social Sciences</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'social')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                  </View>
              </View>

              <View style={[styles.flashcardcontainer, {marginBottom: 80}]} id='others'>
                <Text style={[styles.l3]} >Others</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.id === 'others')}
                      renderItem={({ item }) => (
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
                      )}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      onSnapToItem={(index) => setIndex(index)}
                      useScrollView={true}
                    />
                  </View>

            </View>
          
          </View>

          

      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Set the background color to transparent
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  l1: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  l2: {
    fontSize: 12,
    marginBottom: 15,
    color: '#FFFFFF',
  },
  l3:{
    fontSize: 16,
    color: '#ECE3CE',
    marginLeft: -20,
    marginBottom: 5,

  },
  c2: {
    backgroundColor: '#ECE3CE',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    position: 'relative',
  },
  c2l1: {
    fontSize: 16,
    marginRight: 140,
  },
  c2l2: {
    backgroundColor: '#4F6F52',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  homechar: {
    width: 200,
    height: 220,
    position: 'absolute',
    top: -88,
    left: 168,
  },
  flashcardcontainer :{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    height: 300,
    marginTop: 20,
  },
  flatListContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  flatListContainer: {
    paddingLeft: 16, // Adjust as needed
    paddingRight: 16, // Adjust as needed
    paddingTop: 8, // Adjust as needed
    paddingBottom: 8, // Adjust as needed
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
  deckTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Text color
  },
  carouselContainer: {
    marginRight: -100,
    marginLeft: -100,
    marginTop: 25,
    marginBottom: -15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flash: {
    width: 200,
    height: 170,
    position: 'absolute',
    flex: 1,
    left: 50, 
    alignContent: 'flex-end'
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F6F52',
  },
  infotext2: {
    fontSize: 10,
    color: '#4F6F52',

  },
  
});

export default App;