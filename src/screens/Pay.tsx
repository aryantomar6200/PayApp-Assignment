import { StyleSheet, Text, View, TouchableOpacity, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient';
import Card from '../components/card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Svg, { Defs, LinearGradient as SvgGradient, Stop, Path } from 'react-native-svg';

import { RootTabParamsList  } from '../App';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';



const Pay = () => {

  const [isFreezed, setIsFreezed] = useState<boolean>(true)

  return (
    <ScreenWrapper>
      <SafeAreaView>

        <View style={styles.container}>

          <View style={styles.headcontainer}>
            <Text style={styles.headTxt}>select payment mode</Text>
          </View>

          <View style={styles.subheadcontainer}>
            <Text style={styles.subheadTxt}>choose your preferred payment method to make payment.</Text>
          </View>

          <View style={styles.btnContainer}>

            <LinearGradient
              colors={['#ffffff', '#1a1a1a']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradientBorder}
            >
              <TouchableOpacity style={styles.innerButton} >
                <Text style={styles.buttonText}>pay</Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={['#A90808', '#1a1a1a']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradientBorder}
            >
              <TouchableOpacity style={styles.innerButton}>
                <Text style={[styles.buttonText, { color: '#A90808' }]}>card</Text>
              </TouchableOpacity>
            </LinearGradient>

          </View>

          <View style={styles.debitcardTxtcontainer}>
            <Text style={styles.debitcardTxt}>your digital debit card</Text>
          </View>


          <View
            style={styles.cardcontainer}
          >

            <Card
              height={296}
              width={186}
              isFreezed={isFreezed}
            />

            <View
              style={styles.freezecardcontainer}
            >
              <Pressable
                onPress={() => setIsFreezed(!isFreezed)}
                style={{ marginTop: 79 }}
              >
                {isFreezed

                  ? <View>
                    (<View style={{ width: 58, aspectRatio: 1, borderRadius: 70, borderColor: '#A90808', borderCurve: 'continuous', elevation: 2, shadowColor: '#A90808', alignItems: 'center', justifyContent: 'center', }}>
                      <FontAwesome name='gear' color='#A90808' size={20} />

                    </View>)
                    <Text style={[styles.freezeTxt, { color: '#A90808' }]}>unfreeze</Text>

                  </View>


                  : <View>
                    (<View style={{ width: 58, height: 58, borderRadius: 70, borderColor: '#fff', borderCurve: 'continuous', elevation: 2, shadowColor: '#fff', alignItems: 'center', justifyContent: 'center', }}>
                      <FontAwesome name='gear' color='#fff' size={20} />

                    </View>)
                    <Text style={[styles.freezeTxt, { color: '#fff', paddingLeft: 10 }]}>Freeze</Text>

                  </View>
                }

              </Pressable>

            </View>

          </View>

          {/*footer*/}

          <View style={styles.footerContainer}>

            <Svg
              height="60"
              width="100%"
              viewBox="0 0 100 60"
              preserveAspectRatio="none"
              style={styles.curve}
            >
              <Defs>
                <SvgGradient id="fade" x1="0" y1="0" x2="1" y2="0">
                  <Stop offset="0" stopColor="white" stopOpacity="0" />
                  <Stop offset="0.5" stopColor="white" stopOpacity="1" />
                  <Stop offset="1" stopColor="white" stopOpacity="0" />
                </SvgGradient>
              </Defs>
              <Path

                d="M0,55 C50,50 50,50 100,55"
                fill="url(#fade)"
              />
            </Svg>

          </View>

        </View>

      </SafeAreaView>
    </ScreenWrapper>
  )
}

export default Pay

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  headcontainer: {
    width: 328,
    height: 36,
    marginLeft: 16
  },

  headTxt: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    letterSpacing: -0.17,
  },

  subheadcontainer: {
    width: 358,
    height: 42,
    marginTop: 16,
    marginLeft: 16,
    justifyContent: 'center'

  },

  subheadTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
    opacity: 0.5
  },

  btnContainer: {

    flexDirection: 'row',
    width: 328,
    height: 40,
    marginTop: 24,
    marginLeft: 16,
    gap: 8

  },

  gradientBorder: {
    padding: 2, // border thickness
    borderRadius: 50,
  },
  innerButton: {
    backgroundColor: 'black',
    paddingHorizontal: 34,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 37,
    alignContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'lowercase',
    alignSelf: 'center'
  },

  debitcardTxtcontainer: {
    marginTop: 48,
    marginLeft: 16,
    alignSelf: 'flex-start',
    width: 149,
    height: 18,
    opacity: 0.2

  },

  debitcardTxt: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#fff'
  },


  cardcontainer: {


    marginTop: 16,
    height: 296,
    width: '100%',
    marginLeft: 16,
    flexDirection: 'row',
    gap: 18
  },

  freezecardcontainer: {
    width: 130,
    height: 296,

  },

  freezeTxt: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '700',
    paddingLeft: 4,
    paddingTop: 6
  },

  footerContainer: {

    width: '100%',
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    gap: 50
  },

  footerBtnContainer: {

    flexDirection: 'row',
    gap: 40

  },

  curve: {
    position: 'absolute',
    top: -30,
    left: 0,
  },


})