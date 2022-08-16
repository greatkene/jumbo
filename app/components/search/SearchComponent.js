import React, { useState, useRef } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    Modal, 
    Platform, 
    TextInput, 
    FlatList,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import filter from 'lodash/filter'
import { filterData } from '../../config/dummyData';

import { COLORS, FONTS, SIZES } from '../../config'

function SearchComponent(props) {

    const navigation  = useNavigation();
 

    const [data, setData] =  useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocused, setTextInputFocused] = useState(true)
    const textInput = useRef(0)

    const contains = ({name}, query) => {
        if (name.includes(query)) {
            return true
        }
        return false
    }

    const handleSearch = text => {
        const searchData = filter(filterData, userSearch => {
            return contains(userSearch, text)
        })
        setData([...searchData])
    }


    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback
                onPress={() => {
                    setModalVisible(true)
                }}
            >
                <View style={styles.searchArea}>
                    <Icon 
                        name='search'
                        style={styles.searchIcon}
                        type = 'material'
                        iconStyle={{ marginLeft: 5 }}
                        size= {32}
                    />
                    <Text style={{...FONTS.body4}}>What Are You Looking For?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType='fade'
                transparent = {false}
                visible = {modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.textInput}>
                            <Animatable.View
                                animation = {textInputFocused? "fadeInRight" : "fadeInLeft"}
                                duration = {400}
                            >
                                    <Icon 
                                        name= {textInputFocused ? 'arrow-back' : 'search'}
                                        onPress = {() => {
                                            if(textInputFocused)
                                            setModalVisible(false)
                                            setTextInputFocused(true)
                                        }}
                                        style = {styles.icon2}
                                        type = 'material'
                                        iconStyle={{marginRight: 5}}
                                    />
                            </Animatable.View>
                            <TextInput 
                                style = {{ width: '90%' }}
                                placeholder = ""
                                autoFocus = {false}
                                ref = {textInput}
                                onFocus = {() => {
                                    setTextInputFocused(true)
                                }}
                                onBlur = {() => {
                                    setTextInputFocused(false)
                                }}
                                onChangeText = {handleSearch}
                            />
                             <Animatable.View
                                animation = {textInputFocused? "fadeInLeft" : "fadeInRight"}
                                duration = {400}
                             >
                                    <Icon 
                                        name= {textInputFocused ? 'cancel' : null}
                                        onPress = {() => {
                                            textInput.current.clear()
                                        }}
                                        style = {{marginRight: 10}}
                                        type = 'material'
                                        iconStyle={{color: COLORS.gray2}}
                                    />
                            </Animatable.View>
                        </View>
                    </View>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                        <TouchableOpacity 
                            onPress = {() =>{
                            Keyboard.dismiss
                            navigation.navigate("SearchResultScreen",{item:item.name})
                            setModalVisible(false)
                            setTextInputFocused(true)
                        }}>
                            <View style={styles.view2}>
                                <Text style={{color:COLORS.darkGray, ...FONTS.body3 }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                            )}
                        keyExtractor={item => item.id}

                    />             

                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1 : {
        color: COLORS.gray2,
        ...FONTS.body4
    },
    textInput : {
        borderWidth: 1,
        borderRadius: SIZES.radius,
        marginHorizontal: 0,
        borderColor: COLORS.gray2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        height: 50
    },
    searchArea : {
        marginTop: 10,
        width:"94%",
        height:50,
        backgroundColor: COLORS.lightGray1,
        borderRadius: SIZES.radius,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: COLORS.gray3,
        alignItems: 'center'
    },
    searchIcon : {
        ...FONTS.body3,
        color: COLORS.gray3,
        padding: 5
    },
    view1 : { 
        height:70,
        justifyContent:"center",
        paddingHorizontal:10,
        marginVertical: Platform.OS === 'ios' ? 40 : 0
    },

    view2 : {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        height:70,
    },

    icon2 : { 
        fontSize:24,
        padding:5,
        color:COLORS.gray2,
    },
    modal : {
        flex:1
    }
})

export default SearchComponent;