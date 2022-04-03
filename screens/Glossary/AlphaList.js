import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native'

const Alphalist = (props) => {
  const [selection, setSelection] = useState('A')
  useEffect(() => {
    props.func(selection);
  }, [selection]);
  return (
    <View style={styles.container}>
      <Text onPress={() => setSelection('A')} style={selection == 'A' ? styles.glossLetterSelected : styles.glossLetter}>A</Text>
      <Pressable onPress={() => setSelection('B')}><Text style={selection == 'B' ? styles.glossLetterSelected : styles.glossLetter}>B</Text></Pressable>
      <Text onPress={() => setSelection('C')} style={selection == 'C' ? styles.glossLetterSelected : styles.glossLetter}>C</Text>
      <Text onPress={() => setSelection('D')} style={selection == 'D' ? styles.glossLetterSelected : styles.glossLetter}>D</Text>
      <Text style={selection == 'E' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('E')}>E</Text>
      <Text style={selection == 'F' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('F')}>F</Text>
      <Text style={selection == 'G' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('G')}>G</Text>
      <Text style={selection == 'H' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('H')}>H</Text>
      <Text style={selection == 'I' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('I')}>I</Text>
      <Text style={selection == 'J' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('J')}>J</Text>
      <Text style={selection == 'K' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('K')}>K</Text>
      <Text style={selection == 'L' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('L')}>L</Text>
      <Text style={selection == 'M' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('M')}>M</Text>
      <Text style={selection == 'N' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('N')}>N</Text>
      <Text style={selection == 'O' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('O')}>O</Text>
      <Text style={selection == 'P' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('P')}>P</Text>
      <Text style={selection == 'Q' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('Q')}>Q</Text>
      <Text style={selection == 'R' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('R')}>R</Text>
      <Text style={selection == 'S' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('S')}>S</Text>
      <Text style={selection == 'T' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('T')}>T</Text>
      <Text style={selection == 'U' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('U')}>U</Text>
      <Text style={selection == 'V' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('V')}>V</Text>
      <Text style={selection == 'W' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('W')}>W</Text>
      <Text style={selection == 'X' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('X')}>X</Text>
      <Text style={selection == 'Y' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('Y')}>Y</Text>
      <Text style={selection == 'Z' ? styles.glossLetterSelected : styles.glossLetter} onPress={() => setSelection('Z')}>Z</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  glossLetter:{
  fontSize:30,
  textAlign:"center",
  color:'#444'
  },
  glossLetterSelected:{
    fontSize:30,
    textAlign:"center",
    backgroundColor: '#41CC89',
    color:'#e6fcf2',
    borderWidth: 2,
    borderColor:'#e6fcf2',
    borderRadius: 8
    },
  container:{
    paddingBottom:120
  }
})

export default Alphalist;
