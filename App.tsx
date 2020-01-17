import React from 'react';
import Map from './Map';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View>
      <Map />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
