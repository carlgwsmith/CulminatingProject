import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import WavyHeader from './wavyHeader'

const homeHeader = () => {
  return (
    <View style={styles.header}>
      <WavyHeader customStyles={styles.svgCurve}/>
      <View>
        <Text style={styles.headerText}>Loanic</Text>
        <Text style={styles.subHeaderText}>Planning Tools</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  headerText:{
    fontSize:70,
    lineHeight:80,
    fontFamily:'Poppins_400Regular',
    color:'#fff',
    letterSpacing:0,
  },
  subHeaderText: {
    fontSize: 22,
    color: '#fff',
    marginTop: -25,
    fontFamily:'Poppins_400Regular',
    textAlign:'right'
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
})

export default homeHeader;
