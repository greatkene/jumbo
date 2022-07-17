import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import React from 'react';
import { View, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { FONTS, SIZES, COLORS } from "../../config/theme"

function AuthLayout({ title, subtitle, titleContainer, children }) {
    return (
        <View style={{
            flex:1,
            paddingVertical: 80,
            backgroundColor: COLORS.white
        }}>
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* App Logo */}
                <View style={{
                    alignItems: 'center'
                }}>
                    <Image 
                        source={require("../../assets/logo.png")}
                        resizeMode="cover"
                        style={{
                            height: 100,
                            width: 270,
                        }}
                    />
                </View>
                
                {/* Title and Subtitle */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        ...FONTS.h2
                    }}>
                        {title}
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        color: COLORS.darkGray,
                        marginTop: SIZES.base,
                        ...FONTS.body3
                    }}>
                        {subtitle}
                    </Text>
                </View>

                {/* Contents and co. */}
                {children}
            </KeyboardAwareScrollView>
        </View>
    );
}

export default AuthLayout;