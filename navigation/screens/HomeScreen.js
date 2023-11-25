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
    <ImageBackground
      source={require('../assets/JungleBg.gif')}
      style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={[styles.l1, { marginTop: 10 }]}>Hello, there!</Text>
          <Text style={[styles.l2, { marginBottom: 15 }]}>
            What do you want to learn today?
          </Text>

          <View style={styles.c2}>
            <Text style={styles.c2l1} numberOfLines={2}>
              Plant seeds of wisdom {'\n'}one flashcard at a time!
            </Text>

            <TouchableOpacity style={styles.c2l2}>
              <Text style={{ color: '#ECE3CE' }}>Create a study set now!</Text>
            </TouchableOpacity>
          </View>

          <Image
            style={styles.homechar}
            source={require('../assets/home_char.png')}
          />

          <View style={styles.flashcardcontainer} id="recent">
            <Text style={[styles.l3, { marginBottom: 5 }]}>Recently Viewed</Text>
            <FlatList
              data={decks}
              horizontal
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleDeckPress(item)}
                  style={styles.deckContainer}>
                  <Text style={styles.deckTitle}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('Create')}>
              <Text style={{ color: '#ECE3CE' }}>ADD DECK</Text>
            </TouchableOpacity>

            <Text style={styles.deckTitle}>{selectedDeck.name}</Text>
            <Carousel
              layout="default"
              layoutCardOffset={9}
              ref={isCarousel}
              data={selectedDeck.flashcards}
              renderItem={({ item }) => (
                <Flashcard
                  route={{
                    params: {
                      frontContent: item.frontContent,
                      backContent: item.backContent,
                    },
                  }}
                />
              )}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              onSnapToItem={(index) => setIndex(index)}
              useScrollView={true}
            />
            <Pagination
            dotsLength={selectedDeck.flashcards.length}
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

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('Create')}>
              <Text style={{ color: '#ECE3CE' }}>ADD DECK</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 300,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  l1: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  l2: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  l3: {
    fontSize: 14,
    color: '#ECE3CE',
  },
  c2: {
    backgroundColor: '#ECE3CE',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
    opacity: 0.8,
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
    borderRadius: 20,
    left: -5,
  },
  homechar: {
    width: 200,
    height: 220,
    marginTop: 10,
  },
  flashcardcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  deckContainer: {
    marginRight: 10,
  },
  deckTitle: {
    marginVertical: 15,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
});

export default App;
