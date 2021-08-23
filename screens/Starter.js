import React, { useState } from 'react';
import { 
    View,Text, 
    StyleSheet, 
    Button, 
    Keyboard, 
    TouchableWithoutFeedback, 
    Alert 
} 
from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/color'
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

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
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInputHandler
            }])
            return;
        }
        setIsConfirmed(true)
        setInputValue('')
        setSelectedNumber(chosenNumber)
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if(isConfirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
        )
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
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20
    },
    inputContainer: {
        width:300,
        maxWidth: '80%',
        alignItems:'center',
        marginTop:10
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
})

export default Starter;