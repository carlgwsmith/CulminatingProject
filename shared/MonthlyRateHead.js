import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MonthlyRateHead = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Monthly Mortgage Payment</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header:{
    // width:'100%',
    // height:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
    shadowColor: "#fff",
    shadowOpacity:0,

  },
  headerText:{
    fontSize:30,
    lineHeight:33,
    paddingBottom:50,
    fontFamily:'Poppins_400Regular',
    color:'#fff',
    letterSpacing:0,
  },
})

export default MonthlyRateHead;
