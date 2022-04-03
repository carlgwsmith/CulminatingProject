import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home(props) {
  const pressHandlerPayOff = () =>{
    props.navigation.push('MortgagePayOffCalc')
  }

  const pressHandlerMonthly = () =>{
    props.navigation.push('MonthlyMortgageCalc')
  }
  const pressHandlerGlossary = () =>{
    props.navigation.push('Glossary')
  }
  const pressHandlerAfford = () =>{
    props.navigation.push('AffordabilityCalc')
  }


  return (
    <View style={globalStyles.container}>
      <Text style={styles.HomeText}>How can we help you with your mortgage?
      </Text>
      <TouchableOpacity onPress={pressHandlerMonthly} style={styles.CalcButton}>
        <Text style={styles.BtnText}>Monthly Mortgage Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandlerAfford} style={styles.CalcButton}>
        <Text style={styles.BtnText}>Can I Afford This House?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandlerPayOff} style={styles.CalcButton}>
        <Text style={styles.BtnText}>Mortgage Payoff</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandlerGlossary} style={styles.CalcButton}>
        <Text style={styles.BtnText}>Mortgage Glossary</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  CalcButton:{
    borderRadius:20,
    paddingVertical:20,
    paddingHorizontal:10,
    borderWidth: 3,
    borderColor:'#1F9D61',
    borderStyle:'solid',
    marginBottom:15,
  },
  BtnText:{
    textAlign:'center',
    fontSize:18,
    color:'#1F9D61',
    fontFamily:'Poppins_600SemiBold'
  },
  HomeText:{
    fontFamily: 'Poppins_500Medium',
    fontSize: 22,
    textAlign: 'center',
    color:'#6C6B6B',
    paddingTop:40,
    paddingBottom:20,
  }
})
