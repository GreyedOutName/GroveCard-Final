import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LibrariesScreen from './screens/LibrariesScreen';
import CreateScreen from './screens/CreateScreen';
import SearchScreen from './screens/SearchScreen';

// Screen Names
const homeName = "Home";
const libraryName = "Your Libraries"
const createName = "Create"
const profileName = "Profile";
const searchName = "Search"

const Tab = createBottomTabNavigator();

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

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: {
                position: 'absolute',
                height: 60,
                bottom: 10,
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