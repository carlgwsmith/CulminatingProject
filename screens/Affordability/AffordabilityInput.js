import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import Card from '../../shared/card';
import { globalStyles } from '../../styles/global';
import CurrencyInput from 'react-native-currency-input';

const AffordabilityInput = () => {
  const [income, setIncome] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [debt, setDebt] = useState(0)
  const [error, setError] = useState(false)

  const handleCalculate = () =>{
    console.log('test')
  }

  return (
    <View style={{marginTop:20}}>
      <Card>
      <Text style={globalStyles.inputLabel}>Annual Income Before Taxes</Text>
      <CurrencyInput
            value={income}
            keyboardType = 'numeric'
            style={globalStyles.input}
            onChangeValue={(val) => setIncome(val)}
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
            value={downPayment}
            keyboardType = 'numeric'
            style={globalStyles.input}
            onChangeValue={(val) => setDownPayment(val)}
            prefix="$"
            delimiter=","
            separator="."
            precision={0}
            onChangeText={(formattedValue) => {
              console.log(formattedValue);
            }}
          />
      <Text style={globalStyles.inputLabel}>Monthly Debt</Text>
      <CurrencyInput
            value={debt}
            keyboardType = 'numeric'
            style={globalStyles.input}
            onChangeValue={(val) => setDebt(val)}
            prefix="$"
            delimiter=","
            separator="."
            precision={0}
            onChangeText={(formattedValue) => {
              console.log(formattedValue);
            }}
          />
          <TouchableOpacity style={globalStyles.CalcButton} activeOpacity={error ? 1 : 0.7} onPress={handleCalculate}>
          <Text style={globalStyles.CalcBtnText}>How much can I afford?</Text>
          </TouchableOpacity>
      </Card>
    </View>
  );
}

export default AffordabilityInput;
