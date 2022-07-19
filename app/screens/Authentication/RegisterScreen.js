import React from 'react';
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

function RegisterScreen({navigation}) {
    const [emailError, setEmailError] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <ScrollView backgroundColor={COLORS.white}>
                <View style={{flex:1}}>
            <AuthLayout 
            title="Getting Started"
            subtitle="Register to continue using our app"
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
                     <AppTextInput 
                        placeholder="Username"
                        keyBoardType="text"
                        
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
            


                    {/* SignIn */}

                    <AppButton 
                        title="Sign Up"
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
                        }}> Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={{
                                ...FONTS.h3,
                                color: COLORS.primary
                            }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Social Logins */}
                    
                </View>
            </AuthLayout>
        </View>
           </ScrollView>
    
    );
}

export default RegisterScreen;