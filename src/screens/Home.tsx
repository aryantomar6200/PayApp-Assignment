import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { RootTabParamsList  } from '../App';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';




const Home = () => {
  return (
    <ScreenWrapper>

      {/* <Pressable
        onPress={() => navigation.navigate('Pay')}
        style={{ marginLeft: 25 }}
      >
        <FontAwesome
          name='caret-left'
          color='#fff'
          size={30}
        />
      </Pressable> */}

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={{
          color: '#fff',
          fontSize: 40
        }}>Home Screen</Text>

      </View>
      
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})