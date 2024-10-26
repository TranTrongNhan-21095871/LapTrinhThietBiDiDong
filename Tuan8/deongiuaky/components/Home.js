import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({changePage}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order your favorite</Text>
      <View style={styles.image_wrap}>
        <Image style={styles.image} source={require('../assets/Data/Home_banner.png')} />
      </View>
      <TouchableOpacity style={styles.button_wrap} onPress={changePage}>
        <Text style={styles.button_text}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f3f4f6',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
  },
  header: {
    color: 'green',
    fontSize: 32,
    textAlign: 'center',
  },
  image_wrap: {
    height: 400,
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  button_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_text: {
    backgroundColor: 'green',
    borderRadius: 32,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 24,
    paddingLeft: 24,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default Home;
