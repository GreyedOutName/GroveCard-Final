import * as React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { decks } from '../code/data';

export default function Create({ navigation }) {
  const [title, setTitle] = React.useState('');
  const [subjectCode, setSubjectCode] = React.useState('');
  const [selectedCourse, setSelectedCourse] = React.useState('Actuarial Science');
  const [selectedSchool, setSelectedSchool] = React.useState('Adamson University');
  const [selectedCategory, setSelectedCategory] = React.useState('Business and Economics');

  // Dummy data, replace with your actual data
  const courses = [
    'Actuarial Science',
    'Applied Mathematics',
    'Chemical Engineering',
    'Computer Science',
    'Petroleum Engineering',
    'Physics',
  ];
  const schools = [
    'Adamson University',
    'Far Eastern University',
    'University of the East',
  ];
  const categories = [
    'Business and Economics',
    'Communications and Media',
    'Computer Science',
    'Engineering',
    'Health Sciences',
    'Mathematics and Statistics',
    'Natural Sciences',
    'Social Sciences',
    'Others'
  ];
  const AddDeck=()=>{
    if (!title&&!subjectCode&&!selectedCourse&&!selectedSchool&&!selectedSchool) {
      alert('Please enter all the required values');
      return;
    }

    const newDeck = {
      id: decks.length+1,
      category: selectedCategory,
      name: title,
      author: '@allen',
      code: subjectCode,
      course: selectedCourse,
      school: selectedSchool,
      created: 'yes',
      favorite: 'no',
      flashcards: [],
    };

    decks.unshift(newDeck);
    //setDecks([...decks, newDeck]);
    alert('Deck successfully added')
  }

  return (
    <ImageBackground
      source={require('../assets/JungleBg.gif')}
      style={styles.CreateContainer}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.letsGetInto1}>Let’s get into the (wood) work!</Text>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}> Title</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Enter title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}> Subject Code</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Enter subject code"
            value={subjectCode}
            onChangeText={(text) => setSubjectCode(text.replace(/[^a-zA-Z0-9]/g, ''))}
          />
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}> Course</Text>
          <Picker
            style={styles.pickerstyle}
            selectedValue={selectedCourse}
            onValueChange={(itemValue, itemIndex) => setSelectedCourse(itemValue)}
          >
            {courses.map((course, index) => (
              <Picker.Item key={index} label={course} value={course} />
            ))}
          </Picker>
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}> School</Text>
          <Picker
            style={styles.pickerstyle}
            selectedValue={selectedSchool}
            onValueChange={(itemValue, itemIndex) => setSelectedSchool(itemValue)}
          >
            {schools.map((school, index) => (
              <Picker.Item key={index} label={school} value={school} />
            ))}
          </Picker>
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}> Category</Text>
          <Picker
            style={styles.pickerstyle}
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
          >
            {categories.map((category, index) => (
              <Picker.Item key={index} label={category} value={category} />
            ))}
          </Picker>
        </View>

        <TouchableOpacity style={styles.c2l2} onPress={()=>AddDeck()}>
            <Text style={{ color: '#739072',fontWeight: "700",textAlign: "center"}}>Create</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.additionalTitle}>If your school is not listed as an option, please request its addition by contacting the administrators at grovecards@gmail.com.</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  CreateContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    resizeMode: 'cover',
  },
  scrollContainer:{
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)', 
    paddingBottom: 200,
    paddingHorizontal: 10,
  },
  letsGetInto1: {
    top: 20,
    alignSelf: 'center',
    fontSize: 15,
    letterSpacing: 1.6,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    height: 33,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { height: 1},
    textShadowRadius: 10
  },
  titlecontainer: {
    top: 20,
    padding: 10,
  },
  c2l2: {
    backgroundColor: '#ECE3CE', // Updated color
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
    width: 150,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    top: 30,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  modalTitle: {
    fontSize: 16,
    color: '#ECE3CE',
    marginLeft: -5,
    marginBottom: 5,
    width: 'auto',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  modalInput: {
    backgroundColor: '#ECE3CE', // Updated color
    height: 50,
    borderStyle: 'solid',
    borderColor: '#ECE3CE', // Updated color
    borderRadius: 5,
    borderWidth: 1,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pickerstyle: {
    backgroundColor: '#ECE3CE', // Updated color
    height: 50,
    borderStyle: 'solid',
    borderColor: '#ECE3CE', // Updated color
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  additionalTitle: {
    fontSize: 20,
    color: '#ECE3CE',
    top: 75,
  }
});
