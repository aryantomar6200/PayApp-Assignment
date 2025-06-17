import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from './screens/Home';
import Pay from './screens/Pay';
import Ginie from './screens/Ginie';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Bottom = createBottomTabNavigator()

const BottomTab = () => {
  return (
      <Bottom.Navigator  
        screenOptions={{

          tabBarShowLabel: false,
          tabBarStyle: {
            height: 147,
            backgroundColor: 'black',
            paddingTop: 40
          }
          
        }} >


        <Bottom.Screen name='Home' component={Home}  options={{
          headerShown: false,
          tabBarIcon: () => (
           
              <LinearGradient
                colors={['#fff', '#1a1a1a']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ width: 43, height: 41, borderRadius: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', opacity: .7, marginTop: 10, marginLeft: 20 }}
              >
                  <View
                    style={{ backgroundColor: 'black', width: 41, height: 41, borderRadius: 51, marginTop: 1.6, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <FontAwesome
                      name='home'
                      size={24}
                      color="#fff"
                      style={{ elevation: 2 }}
                    />                    
                  </View>
              </LinearGradient>           

          )
        }}/>
        <Bottom.Screen name='Pay' component={Pay} options={{ 
          headerShown: false,
          tabBarIcon: () => {
            return(              

              <LinearGradient
                colors={['#fff', '#1a1a1a']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ width: 53, height: 51, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
              >

              <View style={{ backgroundColor: 'black', width: 51, height: 51, borderRadius: 51, marginTop: 1.6, alignItems: 'center', justifyContent: 'center' }}>
                  <FontAwesome
                    name='qrcode'
                    size={20}
                    color="#fff"
                    style={{ elevation: 2 }}
                  />
              </View>
              </LinearGradient>

            )
          }
         }} />
        <Bottom.Screen name='Ginie' component={Ginie} options={{ 
          headerShown: false, 
          tabBarIcon: () => (
           
              <LinearGradient
                colors={['#fff', '#1a1a1a']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ width: 43, height: 41, borderRadius: 50, alignItems: 'center', justifyContent: 'center', opacity: .7, marginTop: 10, marginRight: 20 }}
              >

                  <View
                    style={{ backgroundColor: 'black', width: 41, height: 41, borderRadius: 51, marginTop: 1.6, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <FontAwesome
                      name='percent'
                      size={24}
                      color="#fff"
                      style={{ elevation: 2 }}
                    />
                  </View>

              </LinearGradient>      

          )  
        }} />


      </Bottom.Navigator>
  )
}

export default BottomTab