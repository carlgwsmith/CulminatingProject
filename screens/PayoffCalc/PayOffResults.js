import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Pressable } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import InterestBarChart from '../../shared/InterestBarChart'
import Card from '../../shared/card';
import mortgage from 'mortgage-js'


const PayOffResults = ({route, navigation}) => {
  const [loading, setLoading] = useState(false)
  const [interest, setInterest] = useState(0)
  const [principalWithI, setPrincipalWithI] = useState(0)
  const [principal, setPrincipal] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [date, setDate] = useState('')
  const [newDate, setNewDate] = useState('')
  const [ogLoan, setOgLoan] = useState(0)
  const [loanLength, setLoanLength] = useState(0)
  const [newLength, setNewLength] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [extraPayment, setExtraPayment] = useState(0)
  const [savedInterest, setSavedInterest] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const data = route.params;

  var lengthToMonths = loanLength * 12
  var dateParts = route.params.date.split("/");
  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
 const ogDate = new Date(dateObject.setMonth(dateObject.getMonth()+ lengthToMonths));
  const formattedOgDate = ((ogDate.getMonth() > 8) ? (ogDate.getMonth() + 1) : ('0' + (ogDate.getMonth() + 1))) + '/' + ((ogDate.getDate() > 9) ? ogDate.getDate() : ('0' + ogDate.getDate())) + '/' + ogDate.getFullYear()

  const formatDollars = amount => {
    return Number(amount)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

  function handleCalculate(ogLoan, interestRate, loanLength) {
    //Look up the input and output elements in the document
    var amount = ogLoan;
    var apr = interestRate;
    var years = loanLength;
  
  var principal = amount;
  var interest = apr / 100 / 12;
  var payments = years * 12;
    
  // compute the monthly payment figure
  var x = Math.pow(1 + interest, payments); //Math.pow computes powers
  var monthly = (principal*x*interest)/(x-1);

  const calcInfo = {
    monthlyPayment: monthly.toFixed(2),
    total: (monthly * payments).toFixed(2),
    totalInterest: ((monthly*payments)-principal).toFixed(2),
    date: data.date,
  }
  setInterest(calcInfo.totalInterest)
  setPrincipalWithI(calcInfo.total)
  setPrincipal(calcInfo.totalInterest - calcInfo.total)
  setMonthlyPayment(calcInfo.monthlyPayment)
  console.log('og')
  console.log(calcInfo)
  }

  useEffect(() => {
    setInterestRate(route.params.interestRate)
    setLoanLength(route.params.length)
    setOgLoan(route.params.ogLoan)
    setDate(route.params.date)
    
    handleCalculate(data.ogLoan, data.interestRate, data.length)
    
  }, []);

  //Extra payment start
  const [extraMonthly, setExtraMonthly] = useState(0)

  function handleExtra(ogLoan, interestRate, loanLength, extraPayment){
  var amount = ogLoan;
  var apr = interestRate;
  var years = loanLength;
  var extra = parseInt(extraPayment);

  var principal = amount;
  var interest = apr / 100 / 12;
  var payments = years * 12;
    
  // compute the monthly payment figure
  var x = Math.pow(1 + interest, payments); //Math.pow computes powers
  var monthly = (principal*x*interest)/(x-1);
  setExtraMonthly(monthly)
  console.log(monthly)
  setModalOpen(false)
  }

  useEffect(() => {
    let decrement = Math.floor(monthlyPayment + parseInt(extraPayment));
    let nlength = Math.floor(ogLoan / decrement)
    var amount = ogLoan;
    var apr = interestRate;
    var years = nlength / 12;
    
    var principal = amount;
    var interest = apr / 100 / 12;
    var payments = years * 12;
    
  // compute the monthly payment figure
  var x = Math.pow(1 + interest, payments); //Math.pow computes powers
  var monthly = (principal*x*interest)/(x-1);

  console.log(nlength)
  const newDate = new Date(dateObject.setMonth(dateObject.getMonth() - nlength));
  var formattedDate = ((newDate.getMonth() > 8) ? (newDate.getMonth() + 1) : ('0' + (newDate.getMonth() + 1))) + '/' + ((newDate.getDate() > 9) ? newDate.getDate() : ('0' + newDate.getDate())) + '/' + newDate.getFullYear()
  const calcInfo3 = {
    monthlyPayment: monthly.toFixed(2),
    total: (monthly * payments).toFixed(2),
    totalInterest: ((monthly*payments)-principal).toFixed(2),
    date: formattedOgDate,
    newDate: formattedDate,
  }
  setSavedInterest(calcInfo3.totalInterest)
  setNewLength(nlength)
  setNewDate(formattedDate.toString())
  console.log(calcInfo3)
  }, [extraMonthly])




  return (
    <View  style={styles.container}>
      <View style={styles.payheader}>
      <Text style={styles.headerText}>
        <Text style={{color:'#6C6B6B', fontSize:18}}>
          Payoff date
        </Text>
        {date && extraPayment == 0 && 
        <Text><Text style={styles.woheader}> without extra payments</Text>
        <Text style={{color:'#6C6B6B', fontSize:30, paddingTop:10}}> {formattedOgDate}</Text>
        </Text> }
        {extraPayment > 0 &&
        <Text>
        <Text style={styles.woheader}>  with extra payments</Text>
      <Text style={{color:'#6C6B6B', fontSize:30, paddingTop:10}}> {newDate}</Text>
      </Text>
        }
      </Text>
      </View>
      {savedInterest > 0 && 
      <InterestBarChart interest={interest} principal={savedInterest}/>}
      {extraPayment == 0 &&
       <InterestBarChart interest={interest} principal={interest}/>
      }
      <Grid>
          <Col size={20}>
            <Row style={styles.interestRow}>
              <Text style={{color:"#3d3d3d", fontWeight:'700'}} >Interest</Text>
            </Row>
            <Row style={styles.principalRow}>
              <Text style={{color:"#3d3d3d", fontWeight:'700'}}>Principal + Interest</Text>
            </Row>
          </Col>
          <Col size={25}>
            <Row style={styles.interestRow}>
              <Text style={{color:"#3d3d3d", fontWeight:'700'}}>${formatDollars(interest)}</Text>
            </Row>
            <Row style={styles.principalRow}>
              <Text style={{color:"#3d3d3d", fontWeight:'700'}}>${formatDollars(principalWithI)}</Text>
            </Row>
          </Col>
        </Grid>
      <TouchableOpacity onPress={() => setModalOpen(true)} style={globalStyles.CalcButton}>
        <Text style={globalStyles.CalcBtnText}>Add Extra Payment</Text>
      </TouchableOpacity>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.card}>
        <Pressable style={styles.closeBtn} onPress={()=>setModalOpen(false)}>
        <Text>
            <Ionicons name="close-circle-outline" size={16} color="#444" style={styles.modalToggle} />
            Close
        </Text>
      </Pressable>
        {/* <Text onPress={()=>setModalOpen(false)}>Add an Extra Payment</Text> */}
        <Text style={globalStyles.inputLabel}>
          How much was your original loan?
        </Text>
        <Text style={globalStyles.input}>{ogLoan}</Text>
        <Text style={globalStyles.inputLabel}>What was the date of the first payment?</Text>
        <Text style={globalStyles.input}>{data.date.toString()}</Text>
        <Text style={globalStyles.inputLabel}>Loan Length </Text>
        <Text style={globalStyles.input}>{loanLength}</Text>
        <Text style={globalStyles.inputLabel}>Interest Rate </Text>
        <Text style={globalStyles.input}>{interestRate} </Text>
        <Text style={globalStyles.inputLabel}>Extra Monthly Payment</Text>
        <TextInput style={globalStyles.input}
        onChangeText={(val) => setExtraPayment(val)}/>
        <TouchableOpacity onPress={() => handleExtra(data.ogLoan, data.interestRate, data.length, extraPayment)} style={globalStyles.CalcButton}>
          <Text style={globalStyles.CalcBtnText}>Calculate Extra Payment</Text>
          </TouchableOpacity>
      </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  padding:20
  },
  card:{
    padding:20,
  },
  closeBtn: {
    marginLeft:'auto',
    paddingVertical:0,
    paddingHorizontal:8,
  },
  principalRow:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderWidth:2,
    borderColor:'#C5C5C5',
    backgroundColor:'#DCF2FF',
    fontFamily:'Poppins_400Regular'
  },
  interestRow:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1,
    height:40,
    borderWidth:2,
    borderColor:'#C5C5C5',
    backgroundColor:'#FFD3D0',
    fontFamily:'Poppins_400Regular'
  },
  payheader:{
    paddingLeft:10,
    flex:1,
  },
  woheader:{
    color:'#41CC89',
    fontFamily:'Poppins_600SemiBold',
  },
  headerText:{
    textAlign:'center',
    fontSize:18,
    fontFamily:'Poppins_500Medium', 
  },
  modalToggle:{
    marginBottom: 10,
    paddingTop: 10,
    paddingLeft:10,
    marginTop: 0,
    alignSelf:"flex-end"
  },
  // closeBtn: {
  //   marginLeft:'auto',
  //   paddingVertical:10,
  //   paddingHorizontal:8,
  // },
})


export default PayOffResults;
