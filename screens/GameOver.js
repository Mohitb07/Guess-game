import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const GameOver = ({rounds, onRestart}) => {
    return (
        <View style={styles.screen}>
            <Text>THE GAME IS OVER</Text>
            <Text>Number of Rounds takes : {rounds}</Text>
            <Button title="New Game" onPress={onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOver;