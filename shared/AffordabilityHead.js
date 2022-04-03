import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AffordabilityHead = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Affordability Calculator</Text>
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
    fontSize:25,
    lineHeight:25,
    paddingBottom:15,
    paddingTop:5,
    marginTop:-35,
    marginBottom:0,
    fontFamily:'Poppins_400Regular',
    color:'#fff',
    letterSpacing:0,
  },
  subheader:{
    fontSize:18,
    paddingBottom:50,
    paddingTop:0,
    marginTop:-10,
    fontFamily:'Poppins_400Regular',
    color:'#fff',
    letterSpacing:0,
  }
})

export default AffordabilityHead;
