import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Logo hình tròn */}
      <Image source={require('Ellipse8.png')} style={styles.logo} />

      {/* Tiêu đề */}
      <Text style={styles.headline}>GROW YOUR BUSINESS</Text>

      {/* Phần giới thiệu */}
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>

      {/* Các nút */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      {/* Link cuối */}
      <Text style={styles.footerText}>HOW WE WORK?</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#99FFFF',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30, // Cách đều từ logo đến tiêu đề
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical:40,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical:40,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 40, // Cách đều từ các nút đến phần link cuối
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical:40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  footerText: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
  },
});
