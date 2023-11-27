import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar, Agenda} from 'react-native-calendars';

export default function ProfileScreen({ navigation }) {
  const AgendaItem=()=>{
    <Text>TEST</Text>
  }
  return (
    <ImageBackground source={require('../assets/JungleBg.gif')} style={styles.ProfileContainer}>
      <SafeAreaView style={{ flex: 1 , paddingBottom: 100}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.ProfileTitleBar}>
            {/* ... */}
          </View>

          <View style={{ alignSelf: 'center' }}>
            <View style={styles.profileImage}>
              <Image source={require('../assets/vhilly.jpg')} style={styles.image} resizeMode="center" />
            </View>
          </View>

          <View style={styles.profileInfo}>
            <Text style={[styles.Username, { fontWeight: 200, fontSize: 26 }]}>@vhilly</Text>
            <Text style={[styles.Username, { fontSize: 12 }]}>Computer Science Student</Text>
            <Text style={[styles.Username, { top: -10, fontSize: 12 }]}>University of the East</Text>
          </View>

          <View style={styles.calendarContainer}>
            <Agenda
              items={{
                  '2023-12-06': ['HElLO'],
                  '2023-12-07': [],
                }}
            />
          </View>
        </ScrollView>
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
    ProfileTitleBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:24,
        marginHorizontal:16
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: 'hidden',
        marginTop:34,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        aspectRatio:1,
    },
    profileInfo:{
        alignSelf:'center',
        alignItems:'center',
        marginTop:16
    },
    Username: {
        color: "#3A4D39",
        fontSize: 21,
        lineHeight: 26,
        fontFamily: 'monospace',
        fontWeight: 400,
    },
    calendarContainer: {
      margin: 16,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 15,
    },
})