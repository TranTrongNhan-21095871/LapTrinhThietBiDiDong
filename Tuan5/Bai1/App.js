import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ProductScreen  ({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Image
        source={require('./vs_blue.png')}
        style={styles.productImage}
      />
      <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng Chính Hãng</Text>
      
      <Rating
        type='star'
        startingValue={5}
        ratingCount={5}
        imageSize={20}
        style={styles.rating}
      />

      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}> 1.790.000 ₫</Text>
        <Text style={styles.newPrice}> 1.790.000 ₫</Text>
      </View>
      <View style={styles.productImage2}>
        <Text style={styles.productName2}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image
          source={require('./Group 1.png')}
          style={{ marginVertical: 40, }}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('Bạn đã nhấn vào nút Mua Hàng')}>
        <Text style={styles.buttonText}>Chọn Mua</Text>
      </TouchableOpacity>

     
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>4 MÀU - CHỌN MÀU </Text>
          <TouchableOpacity  onPress={() => navigation.navigate('Details')}>
          <Image
            source={require('./Vector.png')}
          />
          </TouchableOpacity>
        </TouchableOpacity>

    </View>
    
  );
};

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ProductScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    marginVertical: 40,
  },
  productImage2: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical: 40,
  },
  productName: {
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  productName2: {
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical: 40,
    color : 'red',
  },
  priceContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  newPrice: {
    fontWeight: 'bold',
  },
  rating: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems:'center',
    width:'90%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  button2: {
    backgroundColor: 'white', // Sửa 'while' thành 'white'
    padding:5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1, // Thêm borderWidth để hiển thị đường viền
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    margin:20,
  },

  buttonText2: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;