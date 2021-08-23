import React, { useState, useRef, useEffect } from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber === exclude){
        return generateRandomNumber(min, max, exclude)
    }else {
        return randomNumber
    }

}



const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1,100, props.userSelectedNumber))
    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userSelectedNumber, onGameOver } = props;
    
    useEffect(() => {
        if(currentGuess === userSelectedNumber){
            onGameOver(rounds)
        }
    }, [currentGuess, userSelectedNumber, onGameOver])
    
    const nextGuessHandler = direction => {
        console.log('userselectedNo', props.userSelectedNumber)
        console.log('guess number', currentGuess)
        if(
            (direction === 'lower' && currentGuess < props.userSelectedNumber) || 
            (direction === 'greater' && currentGuess > props.userSelectedNumber)
            ){
                console.log('inside if')
                Alert.alert("Don't lie!😎", 'You know that this is wrong...', [{
                    text: 'Sorry!',
                    style: 'cancel'
                }])
            return;
        }

        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)

        setCurrentGuess(nextNumber)
        setRounds(currentRound => currentRound + 1)
    }
    
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                
                <View style={styles.btn}><Button title="Lower" 
                onPress={nextGuessHandler.bind(this, 'lower')}/></View>
                
                <View style={styles.btn}><Button title="Greater" 
                onPress={nextGuessHandler.bind(this, 'greater')}/></View>
            
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    btn: {
        width:80
    }
})

export default GameScreen;