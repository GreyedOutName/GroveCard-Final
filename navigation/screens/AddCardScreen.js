import React, {useState}from 'react';
import {  View, StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground, Pressable, Image,} from 'react-native';
import { selectedDeck } from '../code/data';


const AddCardScreen = ({navigation}) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    handleAddCard=()=>{
        if (!question || !answer) {
            alert('Please enter both question and answer');
            return;
        }
      
        const newFlashcard = {
            frontContent: question,
            backContent: answer,
        };
      
        selectedDeck.flashcards.push(newFlashcard)
    }
    handletemp=()=>{
        
    }
    
    return (
        <ImageBackground
            source={require('../assets/GradientBg.png')}
            style={styles.container}>

            <View style={[styles.rectangleView, styles.shadow]}>
                <TouchableOpacity style={styles.back} onPress={()=>navigation.replace('Main')}>
                    <Image style={styles.icon} source={require("../assets/back.png")}/>
                </TouchableOpacity>
                <Text style={styles.l1}>Add Cards</Text>
            </View>

            <View style={[styles.c1, styles.shadow]}>
                <Text style={styles.l2}>ADD QUESTION</Text>
                <View style={styles.c2}>
                    <Text style={styles.l3}>Question</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Question"
                            placeholderTextColor={'rgba(31, 39, 30, 0.4)'}
                            onChangeText={(text) => setQuestion(text)}
                        />
                    <Text style={styles.l4}>Answer</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Answer"
                            placeholderTextColor={'rgba(31, 39, 30, 0.4)'}
                            onChangeText={(text) => setAnswer(text)}
                        />

                    <TouchableOpacity style={[styles.createbtn, styles.shadow]} onPress={()=>handleAddCard()}>
                        <Text style={styles.create}>Create</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.createbtn, styles.shadow]} onPress={()=>navigation.replace('Main')}>
                        <Text style={styles.create}>Done</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
    },
    rectangleView: {
        backgroundColor: "#ece3ce",
        borderStyle: "solid",
        borderColor: "rgba(31, 39, 30, 0)",
        borderBottomWidth: 1,
        width: "100%",
        height: 90,
        paddingTop: 40,
        padding: 15,
        flexDirection: 'row',
        position: 'absolute', 
        top: 0, 
        zIndex: 1,
    },
    icon: {
        height: 37,
        width: 25,
    },
    back: {
        height: 50,
        marginRight: 20,
    },
    l1: {
        fontSize: 22,
        color: '#00AD7C',
    },
    c1: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 400,
        width: 300,
        backgroundColor: "#ece3ce",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'red'
    },
    l2: {
        fontSize: 20,
        marginTop: 10,
        padding: 10,
        width: 250,
        color: '#3A4D39',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(31, 39, 30, 0.4)0',
        textAlign: 'center',
        position: 'absolute', 
        top: 0, 
        zIndex: 1,
        
    },
    c2: {
        top: 30,
        alignItems: 'center'
    },
    l3:{
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'flex-start',
        color: '#3a4d39'
    },
    l4:{
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'flex-start',
        color: '#3a4d39'
    },
    input:{
        width: 250,
        height: 40,
        borderColor: 'rgba(31, 39, 30, 0.4)',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginBottom: 16,
        padding: 8,
        color: '#3A4D39',
        fontSize: 20,
    },
    btn: {
        margin: 10,
        width: 200,
        height: 50,
        backgroundColor: 'red'
    },
    createbtn:{
       width: 200,
       height: 50,
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 50,
       backgroundColor: '#52d681',
       margin: 5
    },


  
    // Shadow Effect ;3
    shadow: {
      shadowColor: '#7F5F0',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });
  

export default AddCardScreen;