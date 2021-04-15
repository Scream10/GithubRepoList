import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}; 

export default Home;
