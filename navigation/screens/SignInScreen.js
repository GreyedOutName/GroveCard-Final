import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Add your authentication logic here
    // For simplicity, let's just navigate to the main screen for now
    navigation.replace('Main');
  };

  return (
    <ImageBackground source={require('../assets/ForestBg.png')} style={styles.backgroundImage}> 
      <View style={styles.container}>

        <View style={styles.appnamecon}>
          <Image style={[styles.appname1]} source={require('../assets/appname.png')}/>
          <Text style={styles.tagline}>Learn and flourish</Text>
          <Text style={styles.description}>✓ Flashcards ✓ Tests ✓ Community</Text>
        </View>

        <Text style={styles.signinlb}>SIGN IN</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'rgba(236, 227, 206, 0.5)'}
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'rgba(236, 227, 206, 0.5)'}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={[styles.signInbutton, styles.shadow]} onPress={handleSignIn}>
          <Text style={styles.SignInText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appnamecon:{
    padding: 10,
    justifyContent: 'center',
    bottom: 80,
    alignItems: 'center'
  },
  appname1: {
    bottom: 0,
    width: 280,
    height: 220,
    margin: 30,
    marginTop: 50,
    marginBottom: 20,
  },
  tagline:{
    fontSize: 14,
    letterSpacing: 1.4,
    lineHeight: 14,
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "center",
    width: 260,
    height: 31,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
    width: 0,
    height: 4
    },
    textShadowRadius: 4 
  },
  description:{
    fontSize: 14,
    letterSpacing: 1.4,
    lineHeight: 14,
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "center",
    width: 300,
    height: 31,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
    width: 0,
    height: 4
    },
    textShadowRadius: 4
  },
  signinlb: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ece3ce',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#ece3ce',
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    color: '#ece3ce'
  },
  signInbutton: {
    backgroundColor: '#ece3ce',
    padding: 10,
    width: 200,
    borderRadius: 25,
  },
  SignInText: {
    color: '#739072',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  shadow:{
    shadowColor: '#7F5F0',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
  
});

export default SignInScreen;
