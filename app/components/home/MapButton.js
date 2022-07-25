import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text} from 'react-native'
import { Icon } from 'react-native-elements';
import { COLORS, FONTS } from '../../config'

function MapButton(props) {
    return (
        <View style={styles.floatButton}>
            <TouchableOpacity>
                <Icon 
                    name='place'
                    type='material'
                    size={32}
                    color={COLORS.primary}
                />
                <Text style={{color: COLORS.gray, ...FONTS.body5}}>Map</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    floatButton: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: 'white',
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center'
    }
})

export default MapButton;