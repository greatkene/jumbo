import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import AuthLayout  from './AuthLayout';
import {icons, FONTS, SIZES, COLORS } from "../../config"
import {FormInput} from '../../components';

function SignIn(props) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    return (
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
                    <FormInput 
                       placeholder="Email"
                        keyBoardType="email-address"
                        autoCompleteType="email"
                        onChange={(value) => {
                            // Validate email
                            setEmail(value)
                        }}
                        errorMsg={emailError}
                    />

                    {/* Forgot Password */}

                    {/* SignIn */}

                    {/* SignUp */}
                </View>
            </AuthLayout>
        </View>
    );
}

export default SignIn;
