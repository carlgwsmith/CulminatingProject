import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';
import DateTimePicker from '@react-native-community/datetimepicker';
import CurrencyInput from 'react-native-currency-input';

const InitialInput = (props) => {
  const [ogLoan, setOgLoan] = useState(0)
  const [loanLength, setLoanLength] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date);
  };

  // var date = new Date('2010-10-11T00:00:00+05:30');
  //   alert(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear());

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // const handlePress = () =>{
  //   props.navigation.navigate('ExtraPayment')
  // }
const formattedDate = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()

  const input = {
    date: formattedDate,
    ogLoan:parseFloat(ogLoan),
    length:parseFloat(loanLength),
    interestRate:parseFloat(interestRate)
  }
  const handlePress= ()=>{
    props.navigation.navigate('PayOffResults', input)
  }

  return (
    <View style={inputStyles.container}>
      <Card>
        <Text style={globalStyles.inputLabel}>
          How much was your original loan?
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
        <Text style={globalStyles.inputLabel}>What was the date of the first payment?</Text>
        <Text style={globalStyles.input} onPress={showDatepicker}>{formattedDate}</Text>
        {/* <View>
        <Button onPress={showDatepicker} title="Select Date" style={inputStyles.dateButton}/>
      </View> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        <Text style={globalStyles.inputLabel}>Loan Length </Text>
        <TextInput style={globalStyles.input}
        onChangeText={(val) => setLoanLength(val)}
        keyboardType = 'numeric'/>
        <Text style={globalStyles.inputLabel}>Interest Rate </Text>
        <TextInput style={globalStyles.input}
        keyboardType = 'numeric'
        onChangeText={(val) => setInterestRate(val)}/>
        <TouchableOpacity onPress={handlePress} style={globalStyles.CalcButton}>
          <Text style={globalStyles.CalcBtnText}>Calculate Payoff</Text>
          </TouchableOpacity>
      </Card>
    </View>
  );
}

const inputStyles = StyleSheet.create({
  container:{
    flex:1,
  padding:8
  },
  dateButton: {
    width:'40px'
  }
})

export default InitialInput;
