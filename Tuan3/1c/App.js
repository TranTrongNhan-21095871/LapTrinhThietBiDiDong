import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationScreen = () => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleCode}>CODE</Text>
      <Text style={styles.titleVer}>VERIFICATION</Text>
      <Text style={styles.label}>Enter ontime password sent on</Text>
      <Text style={styles.label}>++849092605798</Text>
      <View style={styles.codeInput}>
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.codeBox} maxLength={1} keyboardType="numeric" />
      </View>
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>VERIFY CODE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99FFFF', // Màu nền
  },
  titleCode: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical:40,
  },
  titleVer: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical:40,
  },
  label: {
    fontSize: 16,
    textAlign:'center',
  },
  codeInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:40,
  },
  codeBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width:'90%',
    alignItems:'center',
    marginVertical:40,
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default VerificationScreen;