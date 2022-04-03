import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, StyleSheet } from 'react-native';

const backButton = () => {
  const navigation = useNavigation()

  return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()} ><Ionicons name="arrow-back-circle-outline" size={45} color="white" style={styles.button}/></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    position: 'relative',
    left: 5,
    top: 5,
    paddingLeft:5,
    top: 0,
    bottom: 0,
    zIndex:0,
  },
  container:{
    width:'100%',
    height:'100%',
    
  }
})
export default backButton;
