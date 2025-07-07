import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Slider from './src/components/Slider';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Slider />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // white background
  },
});

export default App;
