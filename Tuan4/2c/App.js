import React, { useState } from 'react';
import { View, Text, TextInput, Button, CheckBox ,StyleSheet} from 'react-native';

const PasswordGenerator = () => {
    return (
      <View style={styles.container}>
          <Text style = {styles.title}>Password Generator</Text>
          <TextInput 
          style={styles.textInput}
                multiline
                placeholderTextColor="#888"/>
          <View style={styles.passLength}>
          <Text style = {styles.title}>Password length</Text>
          <TextInput 
          style={styles.textInput}
                multiline
                placeholderTextColor="#888"/>
          </View>
      </View>
    );
    
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 20,
    },
    title:{
      fontSize: 20,
        fontWeight: 'bold',
        marginVertical:40,
    },
    textInput: {
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical:40,
        backgroundColor: 'black',
        textAlignVertical: 'top',
    },
});

export default PasswordGenerator;