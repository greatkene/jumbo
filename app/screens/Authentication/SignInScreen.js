import React, { useState, useRef } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'

import AuthLayout  from './AuthLayout';
import {icons, FONTS, SIZES, COLORS } from "../../config"
import AppTextInput from '../../components/forms/AppTextInput';
import AppPasswordInput from '../../components/forms/AppPasswordInput';
import AppButton from '../../components/AppButton';

function SignInScreen({navigation}) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    return (
        
           <ScrollView backgroundColor={COLORS.white}>
                <View style={{flex:1}}>
            <AuthLayout 
            title="Log In Now"
            subtitle="Please login to continue using our app"
            >
                <View style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}>
                    {/* Form Input */}
                    <AppTextInput 
                        placeholder="Email"
                        keyBoardType="email-address"
                        autoCompleteType="email"
                        onChange={(value) => {
                            // Validate email
                            setPassword(value)
                        }}
                        errorMsg={emailError}
                    />
                    {/* Password Input */}
                    <AppPasswordInput 
                        placeholder="Password"
                        secureTextEntry={true}
                    />
            
                    {/* Forgot Password */}

                    <TouchableOpacity>
                        <Text
                            style={{
                                alignSelf: 'flex-end',
                                ...FONTS.body4
                            }}
                        > Forgot Password? </Text>
                    </TouchableOpacity>

                    {/* SignIn */}

                    <AppButton 
                        title="Log In"
                        onPress={() => navigation.navigate("DrawerNavigator")}
                    />

                    {/* SignUp */}
                    <View style={{
                        flexDirection: 'row',
                        marginTop: -10 ,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}> Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                            <Text style={{
                                ...FONTS.h3,
                                color: COLORS.primary
                            }}>SignUp</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Social Logins */}
                    
                </View>
            </AuthLayout>
        </View>
           </ScrollView>
    
    );
}

const styles = StyleSheet.create({
   
})

export default SignInScreen;
