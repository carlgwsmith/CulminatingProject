import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
container:{
  flex:1,
  padding:24
},
titleText:{
  fontFamily:'Poppins_500Medium',
  fontSize:18,
  color: '#6C6B6B'
},
paragraph: {
  marginVertical: 8,
  lineHeight: 20,
},
input:{
  borderWidth:1,
  borderColor:'#B2B2B2',
  borderRadius:5,
  padding:10,
  marginBottom: 6,
},
inputLabel:{
  textAlign:'center',
  fontFamily:'Poppins_500Medium',
  color: '#6C6B6B',
  fontSize: 16,
  marginTop:12,
},
CalcButton:{
  borderRadius:50,
  paddingVertical:20,
  paddingHorizontal:10,
  borderWidth: 3,
  borderColor:'#1F9D61',
  backgroundColor:'#41CC89',
  borderStyle:'solid',
  marginBottom:30,
  marginTop:10,
},
CalcBtnText:{
  textAlign:'center',
  fontSize:18,
  color:'#fff',
  fontFamily:'Poppins_600SemiBold'
},
})