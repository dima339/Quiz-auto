import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './../styles/'


function Button({onPress, title}) {
    return (

        <TouchableOpacity
            onPress={onPress}
            style={styles.Button}

        >
            <Text style={styles.buttonTitle}>{title}</Text>

        </TouchableOpacity>
    )
}

export {Button}