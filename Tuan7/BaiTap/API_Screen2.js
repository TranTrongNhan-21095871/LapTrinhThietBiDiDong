import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskApp = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'To check email', completed: true },
    { id: '2', title: 'UI task web page', completed: true },
    { id: '3', title: 'Learn javascript basic', completed: false },
    { id: '4', title: 'Learn HTML Advance', completed: false },
    { id: '5', title: 'Medical App UI', completed: false },
    { id: '6', title: 'Learn Java', completed: false },
  ]);

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTask(item.id)}
      />
      <Text style={styles.taskText}>{item.title}</Text>
      <TouchableOpacity>
        <Icon name="edit" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <View style={styles.container}>
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

      <TextInput
        style={styles.searchBar}
        placeholder="Search"
      />

      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id}
        style={styles.taskList}
      />

      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
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
  searchBar: {
    height: 40,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#00b0ff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:120,
  },
});

export default TaskApp;
