import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native'
import { Icon } from 'react-native-elements';
import { COLORS, FONTS, SIZES } from '../../config'

function SearchComponent(props) {
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback>
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
        borderColor: COLORS.primary,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
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
    },

    view2 : {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
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