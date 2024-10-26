import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Alert,
} from 'react-native';

const App = () => {
  const [data, setData] = useState<any[]>([]); // Data from API
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch data from an API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      // Replace this URL with your actual API endpoint
      const response = await fetch('https://66fc9140c3a184a84d1756f6.mockapi.io/Data'); // Sample API
      const json = await response.json();
      setData(json.slice(0, 25)); // For demonstration, limit data to 10 items
    } catch (error) {
      Alert.alert('Error fetching data', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = () => {
    Alert.alert('Add button clicked');
  };

  const handleEdit = () => {
    Alert.alert('Edit button clicked');
  };

  const handleDelete = () => {
    Alert.alert('Delete button clicked');
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      {/* Displaying Avatar */}
      <Image source={{ uri: item.avatar }} style={styles.avatar} />

      {/* Displaying Name and CreatedAt */}
      <View style={styles.itemText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>Created At: {new Date(item.createdAt).toDateString()}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Buttons for Add, Edit, Delete */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>

      {/* Display fetched data */}
      <View style={styles.displayContainer}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    width: '60%',
    borderRadius: 8,
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  displayContainer: {
    flex: 1,
    marginTop: 5,
    borderWidth:2,
    marginVertical: 8,


  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
});

export default App;
