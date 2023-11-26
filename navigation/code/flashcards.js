import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Flashcard = ({ route }) => {
  const { frontContent, backContent } = route.params;
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <TouchableOpacity style={styles.flashcardContainer} onPress={flipCard}>
      <View style={styles.flashcard}>
        {isFlipped ? (
          <Text style={styles.contentText}>{backContent}</Text>
        ) : (
          <Text style={styles.contentText}>{frontContent}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
  formContainer: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  flashcardContainer: {
    marginVertical: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashcard: {
    width: 300,
    height: 200,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Flashcard;