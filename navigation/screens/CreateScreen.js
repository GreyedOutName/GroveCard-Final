import * as React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { decks } from '../code/data';

export default function Create({ navigation }) {
  const [title, setTitle] = React.useState('');
  const [subjectCode, setSubjectCode] = React.useState('');
  const [selectedCourse, setSelectedCourse] = React.useState('');
  const [selectedSchool, setSelectedSchool] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');

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
      alert('Please enter a valid deck name');
      return;
    }

    const newDeck = {
      id: selectedCategory,
      name: title,
      items: 21,
      author: '@allen',
      code: subjectCode,
      course: selectedCourse,
      school: selectedSchool,
      created: 'no',
      favorite: 'no',
      added: 'no',
      flashcards: [],
    };

    decks.push(newDeck);
    //setDecks([...decks, newDeck]);
  }

  return (
    <ImageBackground
      source={require('../assets/JungleBg.gif')}
      style={styles.CreateContainer}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.letsGetInto1}>Let’s get into the (wood) work!</Text>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}>Title</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Enter title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}>Subject Code</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Enter subject code"
            value={subjectCode}
            onChangeText={(text) => setSubjectCode(text.replace(/[^a-zA-Z0-9]/g, ''))}
          />
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}>Course</Text>
          <Picker
            style={styles.modalInput}
            selectedValue={selectedCourse}
            onValueChange={(itemValue, itemIndex) => setSelectedCourse(itemValue)}
          >
            {courses.map((course, index) => (
              <Picker.Item key={index} label={course} value={course} />
            ))}
          </Picker>
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}>School</Text>
          <Picker
            style={styles.modalInput}
            selectedValue={selectedSchool}
            onValueChange={(itemValue, itemIndex) => setSelectedSchool(itemValue)}
          >
            {schools.map((school, index) => (
              <Picker.Item key={index} label={school} value={school} />
            ))}
          </Picker>
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.modalTitle}>Category</Text>
          <Picker
            style={styles.modalInput}
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
          >
            {categories.map((category, index) => (
              <Picker.Item key={index} label={category} value={category} />
            ))}
          </Picker>
        </View>

        <TouchableOpacity style={styles.c2l2} onPress={AddDeck}>
            <Text style={{ color: '#ECE3CE' }}>Create a study set now!</Text>
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
  },
  titlecontainer: {
    top: 20,
    padding: 10,
  },
  c2l2: {
    backgroundColor: '#4F6F52',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  modalTitle: {
    fontSize: 20,
    color: '#ECE3CE',
    paddingBottom: 10,
  },
  modalInput: {
    height: 50,
    borderStyle: 'solid',
    borderColor: '#ece3ce',
    borderRadius: 5,
    borderWidth: 1,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  additionalTitle: {
    fontSize: 20,
    color: '#ECE3CE',
    top: 75,
  }
});
