import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';
import CurrencyInput from 'react-native-currency-input';


const InitialInput = (props) => {
  const [ogLoan, setOgLoan] = useState(0)
  const [firstPayment, setFirstPayment] = useState(0)
  const [value, setValue] = useState(0);
  const [loanLength, setLoanLength] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [taxRate, setTaxRate] = useState(0)
  const [error, setError] = useState('')

  const data = {
    loan: ogLoan,
    firstPayment: firstPayment,
    loanLength: loanLength,
    interestRate: interestRate,
    taxRate: parseFloat(taxRate, 10),
  }
  const handleCalculate = () =>{
    if (
      data.loan < 1 && data.firstPayment < 1 && data.loanLength < 1
    ){
    setError('All fields are required')
  } else if (
    data.loan < data.firstPayment
  ) {
    setError('Your loan must be larger than your downpayment.')
  } else if (
    data.interestRate <= 0 && data.taxRate <= 0
  ) {
    setError('All fields required')
  }
  else{
    props.navigation.navigate('MonthlyResults', data)
  }
  }

  return (
    <View style={inputStyles.container}>
      <Card>
        <Text style={globalStyles.inputLabel}>
          Home Cost
        </Text>
        <CurrencyInput
            value={ogLoan}
            keyboardType = 'numeric'
            style={globalStyles.input}
            onChangeValue={(val) => setOgLoan(val)}
            prefix="$"
            delimiter=","
            separator="."
            precision={0}
            onChangeText={(formattedValue) => {
              console.log(formattedValue);
            }}
          />
        <Text style={globalStyles.inputLabel}>Down Payment</Text>
        <CurrencyInput
            value={firstPayment}
            keyboardType = 'numeric'
            style={globalStyles.input}
            onChangeValue={(val) => setFirstPayment(val)}
            prefix="$"
            delimiter=","
            separator="."
            precision={0}
            onChangeText={(formattedValue) => {
              console.log(formattedValue);
            }}
          />
        <Text style={globalStyles.inputLabel}>Length of Loan (Years) </Text>
        <TextInput style={globalStyles.input}
        keyboardType = 'numeric'
        onChangeText={(val) => setLoanLength(val)}/>
        <Text style={globalStyles.inputLabel}>Annual Interest Rate (%)</Text>
        <TextInput style={globalStyles.input}
        keyboardType = 'numeric'
        onChangeText={(val) => setInterestRate(val)}/>
        <Text style={globalStyles.inputLabel}>Annual Tax Rate (%)</Text>
        <TextInput style={globalStyles.input}
        keyboardType = 'numeric'
        onChangeText={(val) => setTaxRate(val)}/>
        {error.length > 0 &&
        <Text style={{color:'red', paddingTop:20}}>{error}</Text>
        }
        <TouchableOpacity style={globalStyles.CalcButton} activeOpacity={error ? 1 : 0.7} onPress={handleCalculate}>
          <Text style={globalStyles.CalcBtnText}>Get Monthly Rate</Text>
          </TouchableOpacity>
      </Card>
    </View>
  );
}

const inputStyles = StyleSheet.create({
  container:{
    flex:1,
  padding:8,
  marginTop: 14
  }
})

export default InitialInput;
