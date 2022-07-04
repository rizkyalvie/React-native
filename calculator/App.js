import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);
  const [symbol, setSymbol] = useState()

  function handleSum() {
    setResult(firstValue + secondValue)
    setSymbol('+')
  }
  
  function handleSubstraction() {
    setResult(firstValue - secondValue)
    setSymbol('-')
  }

  function handleMultiplication() {
    setResult(firstValue * secondValue)
    setSymbol('x')
  }

  function handleDivision() {
    setResult(firstValue / secondValue)
    setSymbol(':')
  }

  function handlePercentage() {
    setResult(firstValue * (secondValue * 1 / 100))
    setSymbol('%')
  }

  function handleClear() {
    setFirstValue();
    setSecondValue();
    setResult();
    setSymbol();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textValue}>Value A</Text>
      <TextInput
        style={styles.inputField}
        keyboardType='numeric'
        value={firstValue}
        onChangeText={(text) => setFirstValue(Number(text))}
      />
      <Text style={styles.textValue}>Value B</Text>
      <TextInput
        style={styles.inputField}
        keyboardType='numeric'
        value={secondValue}
        onChangeText={(text) => setSecondValue(Number(text))}
      />
      <StatusBar style="auto" />
      <View style={{flexDirection:'row', gap:10}}>
      <TouchableOpacity style={styles.button} onPress={handleSum}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubstraction}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleMultiplication}>
        <Text style={styles.textButton}>*</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', gap:10}}>
      <TouchableOpacity style={styles.button} onPress={handleDivision}>
        <Text style={styles.textButton}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton} onPress={handlePercentage}>%</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton} onPress={handleClear}>C</Text>
      </TouchableOpacity>
      </View>
      {/* <TextInput
        value={result}
        style={styles.resultField}
        keyboardType='numeric'
        editable={false}
      /> */}
      <Text style={styles.textValue}>Result of {firstValue} {symbol} {secondValue}:</Text>
      <View style={styles.resultField}> 
      <Text style={{color: 'black', fontSize: 25}}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa0a0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textValue: {
    paddingTop: 10,
    color: '#000000',
    width: 300,
    textAlign: 'left',
    fontSize: 20
  },
  inputField: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 35,
    width: 300,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10
  },
  button: {
    margin: 15,
    width: 80,
    backgroundColor: '#ff5757',
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  resultField: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 35,
    width: 300,
    alignItems:'center',
    fontSize: 24
  }
});
