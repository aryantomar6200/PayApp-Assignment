import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ViewStyle } from 'react-native'
import { StatusBar } from 'react-native'

type ScreenWrapperProps = {
  style?: ViewStyle
  children: React.ReactNode
}

const ScreenWrapper = ({
  style,
  children
}: ScreenWrapperProps) => {

  return (
    <View style={[{
      flex: 1,
      backgroundColor: 'black',
      paddingTop: 61

    }, style]}>

      <StatusBar barStyle="light-content" />
      {children}

    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})