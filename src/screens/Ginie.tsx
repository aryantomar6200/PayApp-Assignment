import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStacParamsList } from '../App';

type GenieScreenProps = NativeStackScreenProps<RootStacParamsList, 'Ginie'>

const Ginie = ({ navigation }: GenieScreenProps) => {
  return (
    <ScreenWrapper>

      <Pressable
        onPress={() => navigation.pop()}
        style={{ marginLeft: 25 }}
      >
        <FontAwesome
          name='caret-left'
          color='#fff'
          size={30}
        />
      </Pressable>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={{
          color: '#fff',
          fontSize: 40
        }}>Comming Soon...</Text>

      </View>
    </ScreenWrapper>
  )
}

export default Ginie

const styles = StyleSheet.create({})