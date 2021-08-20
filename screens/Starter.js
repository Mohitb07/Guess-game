import React, { useState } from 'react';
import { View,Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/color'
import Input from '../components/Input';

const Starter = props => {
    const [inputValue, setInputValue] = useState('')
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    
    const numberInputHandler = (text) => {
        setInputValue(text.replace(/[^0-9]/g, ''))        
    }

    const resetInputHandler = () => {
        setInputValue('');
        setIsConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(inputValue)
        if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
            return;
        }
        setIsConfirmed(true)
        setInputValue('')
        setSelectedNumber(chosenNumber)
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game</Text>
            <Card style={styles.inputContainer}>
                <Text>Choose a number</Text>
                <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={inputValue}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.button}><Button title="Reset" color={Colors.secondary} onPress={resetInputHandler} /></View>
                    <View style={styles.button}><Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} /></View>
                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20
    },
    inputContainer: {
        width:300,
        maxWidth: '80%',
        alignItems:'center',
    },
    btnContainer: {
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    button: {
        width:90
    },
    input: {
        width: 50,
        textAlign: "center"
    }
})

export default Starter;