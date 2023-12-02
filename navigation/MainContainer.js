import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LibrariesScreen from './screens/LibrariesScreen';
import CreateScreen from './screens/CreateScreen';
import SearchScreen from './screens/SearchScreen';
import SignInScreen from './screens/SignInScreen';
import AddCardScreen from './screens/AddCardScreen';
import ViewScreen from './screens/PreviewScreen';
import PlayScreen from './screens/PlayScreen';



// Screen Names
const homeName = "Home";
const libraryName = "Your Libraries";
const createName = "Create";
const profileName = "Profile";
const searchName = "Search";
const signInName = "SignIn";
const mainName = "Main";
const addcardName = "Add Card"
const viewscreen = "View Screen"
const playscreen = "Play Screen"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBarButton = ({children, onPress})=>(
  <TouchableOpacity
    style = {{
      top: -10, 
      justifyContent: 'center',
      alignItems: 'center',
      ...style.shadow
    }}
    onPress={onPress}
  >
    <View style = {{
      width: 70,
      height: 70,
      borderRadius:35
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const MainTabNavigator = () => (
    
  <Tab.Navigator
  initialRouteName={homeName}
  screenOptions={{
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      height: 60,
      bottom: 20,
      borderRadius: 15,
      left: 10,
      right: 10,
      elevation: 0,
      backgroundColor: '#ECE3CE',
      ...style.shadow
    },
  }}
  >

  <Tab.Screen name={homeName} component={HomeScreen} options={{
      tabBarIcon: ({focused}) => (
        <View>
          <Image 
            source={focused ? require('./assets/home_pick.png') : require('./assets/home.png')}
            resizeMode='contain'
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
      ),
      headerStyle: {
        backgroundColor: '#ECE3CE',
      },
  }}/>
  <Tab.Screen name={libraryName} component={LibrariesScreen} options={{
      tabBarIcon: ({focused}) => (
        <View>
          <Image 
            source={focused ? require('./assets/library_pick.png') : require('./assets/library.png')}
            resizeMode='contain'
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
      ),
      headerStyle: {
        backgroundColor: '#ECE3CE',
      },
  }}/>
  <Tab.Screen name={createName} component={CreateScreen} options={{
      tabBarIcon: ({focused}) => (
        <Image
          source={require('./assets/create.png')}
          resizeMode='contain'
          style={{
            width: 70,
            height: 70,
            }}
        />
      ),
      tabBarButton: (props) => (
        <CustomTabBarButton {...props}/>
      ),
      headerStyle: {
        backgroundColor: '#ECE3CE',
      },
  }}/>
  <Tab.Screen name={searchName} component={SearchScreen} options={{
      tabBarIcon: ({focused}) => (
        <View>
          <Image 
            source={focused ? require('./assets/search_pick.png') : require('./assets/search.png')}
            resizeMode='contain'
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
      ),
      headerStyle: {
        backgroundColor: '#ECE3CE',
      },
  }}/>
  <Tab.Screen name={profileName} component={ProfileScreen} options={{
      tabBarIcon: ({focused}) => (
        <View>
          <Image 
            source={focused ? require('./assets/profile_pick.png') : require('./assets/profile.png')}
            resizeMode='contain'
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
      ),
      headerStyle: {
        backgroundColor: '#ECE3CE',
      },
  }}/>

  </Tab.Navigator>
);

export default function MainContainer() {
return (
<NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name={signInName} component={SignInScreen} />
  <Stack.Screen name={mainName} component={MainTabNavigator} />
  <Stack.Screen name={addcardName} component={AddCardScreen} />
  <Stack.Screen name={viewscreen} component={ViewScreen} />
  <Stack.Screen name={playscreen} component={PlayScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}


const style = StyleSheet.create({
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

})