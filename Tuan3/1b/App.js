import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('./lock.png')} style={styles.logo} />
      <Text style={styles.title}>FORGET PASSWORD</Text>
      <Text style={styles.label}>Provide your account's email for which you want to reset your password</Text>
       <View style={styles.inputContainer}>
        <Ionicons name="mail" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99FFFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical:40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical:40,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    marginVertical:40,
  },
  input: {
    borderColor: '#ccc',
    paddingHorizontal: 10,
    color: 'black',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:'80%',
    alignItems:'center',
    marginVertical:40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    width:'80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical:10,
    marginVertical:40,
    backgroundColor:'#AAAAAA',
  },
});

export default ForgetPasswordScreen;