import React from 'react';
import { View, StyleSheet, ImageBackground, Text, StatusBar, Image } from 'react-native'

import { FONTS, SIZES, COLORS, icons } from "../config"
import AppButton from "../components/AppButton"
import StatusBarPlaceHolder from '../components/StatusBarPlaceHolder';

const positionTop = Platform.OS === 'ios' ? 600 : 550 ;
const textPosition = Platform.OS === 'ios' ? 500 : 450 ;



function OnBoarding(props) {
    return (
           <View>
               <StatusBarPlaceHolder />
                <ImageBackground
                // blurRadius={3}
                style={styles.background}
                source={require("../assets/onBoarding.jpg")}
            >
                <View style={styles.innerContainer}>
          
                    <View style={styles.contents}>
                    <Image style={{width: 300, height: 100, marginHorizontal: 50}} source={require("../assets/logo.png")} />
                        <View style={styles.header}>
                            <Text style={{
                                ...FONTS.h1,
                                color: COLORS.white,
                            }}>Welcome to Jumbo! Chop Veggies</Text>
                            <Text style={{
                                ...FONTS.body3,
                                color: COLORS.gray3,
                                marginVertical: 18
                            }}>Enjoy amazing deliveries of fresh veggies</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <AppButton title="Get Started"  onPress={() => console.log('Tapped')} />
                            {/* <AppButton title="Register" color='primary' style={{
                                backgroundColor: COLORS.white2,
                                marginTop: -7
                            }} /> */}
                        </View>
                    </View>
                </View>
        </ImageBackground>
        
           </View>
    );
}
const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%'
        
    },
    contents: {
        marginTop: 80
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.50)',
      },
    header: {
        position: "absolute",
        top: textPosition,
        alignItems: 'flex-start',
        paddingHorizontal: 20
    },
    buttonContainer: {
        width: "100%",
        padding: 20,
        position: "absolute",
        top:positionTop
    }
})

export default OnBoarding;