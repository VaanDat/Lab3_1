import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Phạm Văn Đạt - 20520155
const Helps = () => {
  return (
    <View style={styles.container}>
      <Text>Helps Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Helps;