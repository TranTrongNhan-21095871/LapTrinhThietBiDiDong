import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddJobScreen = () => {
  const [job, setJob] = useState('');

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://your-profile-image-url' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greeting}>Hi Twinkle</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
      </View>

      {/* Add Job Title */}
      <Text style={styles.addJobTitle}>ADD YOUR JOB</Text>

      {/* Input Job Section */}
      <View style={styles.inputContainer}>
        <Icon name="assignment" size={24} color="green" style={styles.inputIcon} />
        <TextInput
          style={styles.textInput}
          placeholder="input your job"
          value={job}
          onChangeText={setJob}
        />
      </View>

      {/* Finish Button */}
      <TouchableOpacity style={styles.finishButton}>
        <Text style={styles.finishButtonText}>FINISH →</Text>
      </TouchableOpacity>

      {/* Image Section */}
      <Image
        source={ require('./takenotes.png')}  // Add your own image URL here
        style={styles.noteImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#777',
  },
  addJobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  finishButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#00b0ff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  finishButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default AddJobScreen;

