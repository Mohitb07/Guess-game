import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import Starter from './screens/Starter';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }
  
  let content = <Starter onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <= 0 ){
    content = <GameScreen userSelectedNumber={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0){
    content = <GameOver rounds={guessRounds} onRestart={newGameHandler}/>
  }else {
    content
  }
  return (
    <View style={styles.container}>
      <Header title="Guess game"/>
      {content}
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
