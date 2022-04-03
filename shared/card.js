import React from 'react';
import { StyleSheet, View } from 'react-native';

const card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius:10,
    backgroundColor: "#fff",
    marginTop:-60,
    marginLeft:10,
    marginRight:10,
    padding:20,
    zIndex:999
  },
  cardContent:{}
})

export default card;
