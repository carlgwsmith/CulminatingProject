import React, {useEffect, useState} from 'react';
import { Text, View, Button, Modal } from 'react-native';
import Card from '../../shared/card';
import { Ionicons } from '@expo/vector-icons';

const ExtraPayment = () => {
  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
        <Card>
        <Pressable style={styles.closeBtn} onPress={()=>setModalOpen(false)}>
        <Text>
            <Ionicons name="close-circle-outline" size={16} color="black" style={styles.modalToggle} />
            Close
        </Text>
      </Pressable>
        <Text style={globalStyles.inputLabel}>
          How much was your original loan?
        </Text>
        <Text style={globalStyles.input}>{ogLoan}</Text>
        <Text style={globalStyles.inputLabel}>What was the date of the first payment?</Text>
        <Text style={globalStyles.input}>{date.toString()}</Text>
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
      </Card>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  closeBtn: {
    // borderRadius:10,
    // backgroundColor:'#f3f3f3',
    // width:110,
    // marginTop:20,
    marginLeft:'auto',
    paddingVertical:10,
    paddingHorizontal:8,
  },
})

export default ExtraPayment;
