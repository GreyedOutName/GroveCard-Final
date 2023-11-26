import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { SLIDER_WIDTH, ITEM_WIDTH } from '../code/carouselCardItem'
import Flashcard from '../code/flashcards.js'

var decks2 = [
  {
    id: 1,
    name: 'GYATT Flashcards',
    flashcards: [
      { id: 1, frontContent: 'Full name ni allen?', backContent: 'BOGART GYATT MACASPAC' },
      { id: 2, frontContent: 'huh?', backContent: 'huhtdog kwento mo sa pagong' },
      
    ],
  },
  {
    id: 2,
    name: 'Facts',
    flashcards: [
      { id: 1, frontContent: 'shibal', backContent: 'uwu' },
      { id: 2, frontContent: 'a', backContent: 'b' },
     
    ],
  },
]

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={decks2[0].flashcards}
        renderItem={({ item }) => (
          <Flashcard route={{ params: { frontContent: item.frontContent, backContent: item.backContent } }} />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={decks2[0].flashcards.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}

export default CarouselCards