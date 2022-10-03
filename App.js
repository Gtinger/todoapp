import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/todoScreen";
import SettingsScreen from "./components/doneScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

//Her oprettes en instans af tabnavigator.
const Tab = createBottomTabNavigator();


function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
        {
          display: "flex"
        },
          null
          ],
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Todo') {
              return (
                  <Ionicons
                      name={'alert-outline'}
                      size={size}
                      color={color}
                  />
              );
            } else if (route.name === 'Done') {
              return (
                  <Ionicons
                      name='checkmark-done-outline'
                      size={size}
                      color={color}
                  />
              );
            }
            else{
              return (
                  <Ionicons
                      name='md-list-outline'
                      size={size}
                      color={color}
                  />
              );
            }
          },
        })}
        >
          <Tab.Screen name="Done" children={()=><SettingsScreen />} />
          <Tab.Screen name="Todo" children={()=><HomeScreen/>} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App