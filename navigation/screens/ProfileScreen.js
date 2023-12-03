import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { currentUser } from '../code/creatorData';

export default function ProfileScreen({ navigation }) {
  const [items, setItems] = useState({
    '2023-12-01': [{ text: 'Test for CS' }],
    '2023-12-02': [{ text: 'Test for Engineering' }],
    '2023-12-03': [{ text: 'Review Flashcard 2' }],
  });

  const renderAgendaItem = (item) => (
    <Text style={styles.AgendaItems}>{item.text}</Text>
  );

  return (
    <ImageBackground source={require('../assets/JungleBg.gif')} style={styles.ProfileContainer}>

      <SafeAreaView style={{ flex: 1, paddingBottom: 100 }}>

          <View style={styles.c1}>
            <View style={styles.profileImage}>
              <Image source={require('../assets/vhilly.jpg')} style={styles.image} resizeMode="center" />
            </View>
            <Image source={require('../assets/Logo.png')} style={styles.logo} resizeMode="center" />
            <View style={styles.profileInfo}>
              <View style={styles.usernamebg}>
                <Text style={styles.Username}>{currentUser.uname}</Text>
              </View>
              <Text style={styles.uni}>University of the East</Text>
              <Text style={styles.course}>BS Computer Science</Text>
              <TouchableOpacity style={styles.logoutbtn} onPress={()=>navigation.navigate('SignIn')}>
                <Text style={{ color: '#739072', fontWeight: "700", textAlign: "center", fontSize: 12 }}>Log-Out</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={[styles.l1]}> Calendar </Text>
          <View style = {styles.calendarContainer}>
            <Agenda
              style={{height: 800}}
              items={items}
              selected="2023-12-01"
              renderItem={renderAgendaItem}
              loadItemsForMonth={() => { }}
            />
          </View>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    //profilecontainer
    ProfileContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    c1:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: 30,
      height: 'auto'
    },
    profileImage: {
        width: 80,
        height: 80,
        left: 20,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#3A4D39',
        position: 'absolute',
        zIndex: 1,
    },
    logo:{
      width: 80,
      height: 80,
      left: 60,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        aspectRatio:1,
    },
    profileInfo:{
        alignItems:'center',
        marginTop:20,
        marginBottom: 20,
        marginLeft: 80,
    },
    usernamebg:{
      backgroundColor: "rgba(236, 227, 206, 0.8)",
      borderRadius: 10,
      height: 40,
      width: 150,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5
    },
    Username: {
      color: '#3A4D39',
      fontWeight: 'bold',
      fontSize: 14,
      fontFamily: 'monospace',
    },
    course: {
      fontSize: 10,
      color: '#ECE3CE',
      fontWeight: 'bold',
      fontFamily: 'monospace',
    },
    uni:{
      fontSize: 10,
      color: '#ECE3CE',
      fontWeight: 'bold',
      fontFamily: 'monospace',
    },
    l1 :{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ECE3CE',
      marginLeft: 15,
      marginBottom: 5,
      marginTop: 30,
      fontFamily: 'monospace',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },
    AgendaItems:{
      color: "#3A4D39",
      marginVertical: 40,
      fontSize: 16,
      lineHeight: 26,
      fontFamily: 'monospace',
    },
    calendarContainer: {
      flex:1,
      margin: 16,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 15,
      marginHorizontal: 30,
      height: 800,
    },

    logoutbtn: {
      backgroundColor: '#ece3ce',
      padding: 5,
      borderRadius: 20,
      marginTop: 10,
      width: 150,
      alignItems: 'center',
      shadowOffset: {
        width: 0,
        height: 4
        },
      shadowRadius: 4,
      elevation: 4,
      shadowOpacity: 1,
    },



})