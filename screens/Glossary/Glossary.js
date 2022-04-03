import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native'
import Alphalist from './AlphaList';
import Definitions from './Definitions';
import { Col, Row, Grid } from 'react-native-easy-grid';

const Glossary = () => {
  const [selectedLetter, setLetter] = useState('');
  const [letterpull, setLetterPull] = useState('');
  const pull_data = (data) => {
    let pulled = data;
    setLetterPull(pulled);
  }

  useEffect(() => {
    setLetter(letterpull)
  }, [letterpull]);


  return (
    <View>
      <View>
      <Text style={{textAlign: 'center', padding: 10}}>
        Select letter on the right to see definitions starting with that letter.
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop:20}}>
      <ScrollView style={styles.listSelect}>
      <Alphalist func={pull_data}/>
      </ScrollView>
      <ScrollView style={styles.definedView}>
        <Definitions letter={selectedLetter}/>
      </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  listSelect:{
    // flexDirection:'row',
    // alignItems:'center',
    // justifyContent:'left',
    width:100,
    paddingRight:15,
    paddingLeft:15,
    borderRightWidth: 4,
    paddingBottom:30,
    borderRightColor: "#f3f3f3",
  },
  definedView:{
    // flexDirection:'row',
    width:'100%',
  }
})
export default Glossary;
