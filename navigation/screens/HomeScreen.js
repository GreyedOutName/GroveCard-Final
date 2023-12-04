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
import { setSelectedDeck } from '../code/data';
import Flashcard from '../code/flashcards';
import CarouselCards from '../code/carouselCards';
import ViewScreen from './PreviewScreen';
import { setSearchText } from './SearchScreen';
import { currentUser } from '../code/creatorData';


const App = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const handleDeckPress = (deck) => {
    setSelectedDeck(deck);
    navigation.replace("View Screen")
  };

  return (
    <ImageBackground source={require('../assets/JungleBg.gif')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          <Text style={[styles.l1, { top: 10 }]}> Hello, there!</Text>
          <Text style={[styles.l2, { top: 10 }]}> What do you want to learn today?</Text>

          <View style={[styles.c2]}>

            <Text style={styles.c2l1} numberOfLines={2}>
              Plant seeds of wisdom {'\n'}one flashcard at a time!
            </Text>

            <TouchableOpacity style={styles.c2l2} onPress={() => navigation.navigate('Create')}>
            <Text style={{ color: '#ECE3CE', fontWeight: 'bold', fontFamily: 'monospace', fontSize: 11,}}>Create a study set now!</Text>
            </TouchableOpacity>


            <Image style={styles.homechar} source={require('../assets/home_char.png')} />

          </View>
          <View style={styles.flashcardcontainer} id='added'>
                <Text style={[styles.l3]} >Recently Added</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.created === 'yes')}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                            <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                            <View style={styles.info}> 
                              <Text style={styles.infotext}>{item.name}</Text>
                              <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='choice'>
                <Text style={[styles.l3]} > Editor's Choice</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'choice')}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                            <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                            <View style={styles.info}> 
                              <Text style={styles.infotext}>{item.name}</Text>
                              <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='added'>
                <Text style={[styles.l3]} >Your FlashCards</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.author === currentUser.uname)}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                            <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                            <View style={styles.info}> 
                              <Text style={styles.infotext}>{item.name}</Text>
                              <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='Business and Economics'>
                <Text style={[styles.l3]}> Business and Economics</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'Business and Economics')}
                      renderItem={({ item }) => (
                      <TouchableOpacity onPress={()=> handleDeckPress(item)}style={styles.deckContainer}>
                        <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                        <View style={styles.info}> 
                          <Text style={styles.infotext}>{item.name}</Text>
                          <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='Communications and Media'>
                <Text style={[styles.l3]} > Communication and Media</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'Communications and Media')}
                      renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                        <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                        <View style={styles.info}> 
                          <Text style={styles.infotext}>{item.name}</Text>
                          <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='Computer Science'>
                <Text style={[styles.l3]} > Computer Science</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'Computer Science')}
                      renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                        <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                        <View style={styles.info}> 
                          <Text style={styles.infotext}>{item.name}</Text>
                          <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='Engineering'>
                <Text style={[styles.l3]} > Engineering</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'Engineering')}
                      renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                        <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                        <View style={styles.info}> 
                          <Text style={styles.infotext}>{item.name}</Text>
                          <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='Health Sciences'>
                <Text style={[styles.l3]} > Health Sciences</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'Health Sciences')}
                      renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                        <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                        <View style={styles.info}> 
                          <Text style={styles.infotext}>{item.name}</Text>
                          <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='Mathematics and Statistics'>
                <Text style={[styles.l3]} > Mathematics and Statistics</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'Mathematics and Statistics')}
                      renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                        <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                        <View style={styles.info}> 
                          <Text style={styles.infotext}>{item.name}</Text>
                          <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='Natural Sciences'>
                <Text style={[styles.l3]} > Natural Sciences</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'Natural Sciences')}
                      renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                        <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                        <View style={styles.info}> 
                          <Text style={styles.infotext}>{item.name}</Text>
                          <View style={styles.info2}>
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

              <View style={styles.flashcardcontainer} id='Social Sciences'>
                <Text style={[styles.l3]} > Social Sciences</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'Social Sciences')}
                      renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                        <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                        <View style={styles.info}> 
                          <Text style={styles.infotext}>{item.name}</Text>
                          <View style={styles.info2}>
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

              <View style={[styles.flashcardcontainer, {marginBottom: 80}]} id='Others'>
                <Text style={[styles.l3]} > Others</Text>
                  <View style={[styles.carouselContainer]}>
                    <Carousel
                      layout="default"
                      ref={isCarousel}
                      data={decks.filter((deck) => deck.category === 'Others')}
                      renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleDeckPress(item)}style={styles.deckContainer}>
                        <Image style={styles.flash} source={require('../assets/flashcard.png')} />
                        <View style={styles.info}> 
                          <Text style={styles.infotext}>{item.name}</Text>
                          <View style={styles.info2}>
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
    color: '#ECE3CE',
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'monospace',
  },
  l2: {
    fontSize: 12,
    marginBottom: 15,
    color: '#ECE3CE',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'monospace',
  },
  l3:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ECE3CE',
    marginLeft: -20,
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'monospace',
  },
  c2: {
    backgroundColor: "rgba(236, 227, 206, 0.7)",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    position: 'relative',
    borderRadius: 20,
    width: '100%'
  },
  c2l1: {
  	fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
    fontWeight: "700",
    color: "#4f6f52",
    textAlign: "left",
    alignSelf: 'center',
    width: 295,
    height: 40,
    fontFamily: 'monospace',
  },
  c2l2: {
    backgroundColor: '#3A4D39',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 10,
    alignSelf: 'flex-start',
    
  },
  homechar: {
    width: 200,
    height: 220,
    position: 'absolute',
    bottom: 0,
    right: -30,
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
    position: 'absolute',
    width: 200,
  },
  infotext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F6F52',
    width: 'auto',
  },
  infotext2: {
    fontSize: 10,
    color: '#4F6F52',
    width: 'auto',

  },
  
});

export default App;