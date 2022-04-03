import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Text, SafeAreaView, TouchableOpacity, Pressable, ScrollView, StyleSheet, Modal} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { globalStyles } from '../../styles/global';
import Piechart from '../../shared/Piechart';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../shared/card';

const optionsPerPage = [2, 3, 4];

const MonthlyResults = ({route, navigation}) => {
  const [DataTable, setDataTable] = useState([])
  const [loading, setLoading] = useState(true)
  const [payment, setPayment] = useState(0)
  const [pieInterest, setInterest] = useState(0)
  const [piePrincipal, setPrincipal] = useState(0)
  const [pieTaxes, setTaxes] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  let data = route.params;
  let lengthOfLoan = 12 * data.loanLength;
  let tableInfoArr = []


function amort(principal, interest, months, formTax)
{
  setLoading(true)
  console.log('loading')
  let rnd = function(n) {
  	return Math.round(n * 100) / 100; // round to 2 digits
  };

  let i = interest / 100.0 / 12
  let payment = rnd(principal * (i + i / (Math.pow(1+i, months) -1 )));
  console.log('payment = ', payment);
  let m;
  let balance = principal;
  let totalinterest = 0;
  let t = formTax / 100
  let balwt = (balance * t) / 12
   setPayment(Math.round(payment + balwt))

  for (m = 1; m < months; m++) {
  	let tointerest = rnd(balance * i);
		totalinterest = rnd(totalinterest + tointerest); 
    let taxR = rnd((balance * t) / 12)
    let toprincipal = rnd(payment - tointerest);
    balance = rnd(balance - toprincipal)

    let tableInfo = {}
    tableInfo['month'] = m
    tableInfo['balance'] = balance;
    tableInfo['taxRate'] = taxR;
    tableInfo['interest'] = tointerest;
    tableInfo['principal'] = toprincipal;

    tableInfoArr.push(tableInfo)
}
setDataTable(tableInfoArr)
setInterest(tableInfoArr[0].interest)
setPrincipal(tableInfoArr[0].principal)
setTaxes(tableInfoArr[0].taxRate)
setLoading(false)
console.log('done loading')
}

useEffect(() => {
  amort((data.loan - data.firstPayment), data.interestRate, lengthOfLoan, data.taxRate)
  console.log(typeof data.taxRate)
}, [data]);




if(loading){
  return (
  <View>
    <ActivityIndicator size="large" color="#41CC89" style={{marginTop:40}} />
  </View>
  )    
}
  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
      <Pressable style={styles.closeBtn} onPress={()=>setModalOpen(false)}>
        <Text>
          <Ionicons name="close-circle-outline" size={16} color="black" style={styles.modalToggle} />
          Close Table
        </Text>
      </Pressable>
      <Text style={styles.modalTitle}>
        Monthly Amoritization Table
      </Text>
      <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={styles.container}>
        <Grid>
          <Col size={20}>
            <Row style={styles.cellTop}>
              <Text style={{color:"white"}} class={styles.title}>Month</Text>
              </Row>
          </Col>
          <Col size={25}>
            <Row style={styles.cellTop}>
              <Text style={{color:"white"}} class={styles.title}>Balance</Text>
              </Row>
          </Col>
          <Col size={25}>
            <Row style={styles.cellTop}>
              <Text style={{color:"white"}} class={styles.title}>Interest</Text>
              </Row>
          </Col>
          <Col size={25}>
            <Row style={styles.cellTop}>
              <Text style={{color:"white"}} class={styles.title}>Taxes</Text>
              </Row>
          </Col>
          <Col size={25}>
            <Row style={styles.cellTop}>
              <Text style={{color:"white"}} class={styles.title}>Principal</Text>
              </Row>
          </Col>
        </Grid>
      </ScrollView>
      <ScrollView styles={styles.dataTable}>
        {DataTable.map((element, index) => {
    return (
      <Grid key={index}>
        <Col size={20}>
          <Row style={styles.cell}>
          <Text>#{element.month}</Text>
            </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cell}>
          <Text>${element.balance}</Text>
            </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cell}>
          <Text>${element.interest}</Text>
            </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cell}>
          <Text>${element.taxRate}</Text>
            </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cell}>
          <Text>${element.principal}</Text>
            </Row>
        </Col>
      </Grid>
    );
  })}
      </ScrollView>
      </SafeAreaView>
        </Modal>
      <View>
        <Text style={styles.monthlyPay}>Monthly Payment:</Text>
        <Text style={styles.monthlyPayNum}>${payment}</Text>
      </View>
      <View>
        <Piechart interest={pieInterest} principal={piePrincipal} taxes={pieTaxes} payment={payment}/>
      </View>
      <View style={{padding:20}}>
      <TouchableOpacity onPress={() => setModalOpen(true)} style={globalStyles.CalcButton}>
        <Text style={globalStyles.CalcBtnText}>Monthly Breakdown</Text>
      </TouchableOpacity>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 40,
    // padding: 20,
    paddingTop: 0,
    marginTop:0,
    paddingBottom:0,
  },
  topGrid:{
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  SafeAreaView: {
    marginHorizontal:10,
  },
  dataTable : {
    marginTop: 40,
    paddingTop:30,
  },
  modalTitle: {
    fontSize:24,
    paddingBottom:5,
    fontFamily: 'Poppins_500Medium',
    paddingTop:10,
    textAlign:'center'
  },
  cell: {
    borderWidth: .5,
    borderColor: '#f3f3f3',
    height:30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 24,
    fontWeight: "800",
  },
  cellTop:{
    borderWidth: .5,
    borderColor: '#f3f3f3',
    height:30,
    paddingBottom:10,
    paddingTop:7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#41CC89',
  },
  closeBtn: {
    // borderRadius:10,
    // backgroundColor:'#f3f3f3',
    // width:110,
    // marginTop:20,
    marginLeft:'auto',
    paddingVertical:10,
    paddingHorizontal:8,
  },
  header:{
    textAlign:'center',
    paddingTop: 20,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
  },
  monthlyPay:{
    textAlign:'center',
    paddingTop: 20,
    fontSize: 30,
    fontFamily: 'Poppins_500Medium',
  },
  monthlyPayNum:{
    textAlign:'center',
    paddingTop: 0,
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
  },
  modalToggle:{
    // marginBottom: 10,
    paddingTop: 10,
    paddingLeft:10,
    marginTop: 0,
    alignSelf:"flex-end"
  }
})
export default MonthlyResults;