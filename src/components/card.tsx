import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ViewStyle } from 'react-native'
import { ImageSourcePropType } from 'react-native'

type cardProps = {
  height: number
  width: number
  style?: ViewStyle
  isFreezed: boolean
}

const Card = ({
  height = 296,
  width,
  style,
  isFreezed
}: cardProps) => {

  const cardImg: ImageSourcePropType = isFreezed ? require('../assets/Images/hiddencard.png') : require('../assets/Images/debitcard.png')

  return (
    <View style={[style, { height: height, width: width },]}>
      <Image
        source={cardImg}
        style={[styles.cardcontainer, { height: '100%', width: '100%', borderRadius: 16 }]}
      />
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardcontainer: {
    shadowColor: '#ffffff',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 2,
  }
})