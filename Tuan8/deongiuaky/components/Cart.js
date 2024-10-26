import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import { AntDesign, Fontisto, MaterialIcons } from '@expo/vector-icons';

const Item = ({ item, increaseQuantity, decreaseQuantity }) => {
  const { image, name, price, quantity } = item;

  return (
    <View style={styles.item}>
      <Image
        style={{ borderRadius: 16, height: 60, width: '25%' }}
        resizeMode="contain"
        source={require('../assets/Data/product.png')}
      />
      <View style={styles.info_product}>
        <Text style={{ fontSize: 22, color: 'green' }}>$ {price}</Text>
        <Text>{name}</Text>
        <View style={{ flexDirection: 'row', paddingTop: 8 }}>
          <Fontisto name="star" size={12} color="orange" />
          <Fontisto name="star" size={12} color="orange" />
          <Fontisto name="star" size={12} color="orange" />
          <Fontisto name="star" size={12} color="orange" />
          <Fontisto name="star" size={12} color="orange" />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '35%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={decreaseQuantity}>
          <AntDesign name="minuscircle" size={17} color="green" />
        </TouchableOpacity>
        <Text style={{ paddingLeft: 4, paddingRight: 4, fontSize: 18 }}>
          {quantity}
        </Text>
        <TouchableOpacity onPress={increaseQuantity}>
          <MaterialIcons name="add-circle" size={20} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Cart = ({changePage, dataCart: data}) => {
  const [quantities, setQuantities] = useState(
    data.map((item) => ({ ...item, quantity: 1 }))
  );

  const increaseQuantity = (id) => {
    setQuantities((preQuantities) => {
      return preQuantities.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      });
    });
  };

  const decreaseQuantity = (id) => {
    setQuantities((preQuantities) => {
      return preQuantities.map((item) => {
        return item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    });
  };

  const totalPrice = quantities.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => changePage('SEARCH')}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 24,
            color: 'green',
            paddingTop: 16,
            paddingBottom: 16,
          }}>
          My Basket
        </Text>
        <SafeAreaView style={{ height: 370 }}>
          <FlatList
            data={quantities}
            renderItem={({ item }) => (
              <Item
                item={item}
                increaseQuantity={() => increaseQuantity(item.id)}
                decreaseQuantity={() => decreaseQuantity(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
      </View>
      <View
        style={{
          paddingTop: 16,
          marginTop: 16,
          borderTopWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Total:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'red' }}>
          ${totalPrice}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.pay_button}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingTop:40,
    backgroundColor: '#f3f4f6',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc',
    padding: 8,
  },
  info_product: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '40%',
  },
  pay_button: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'green',
    borderRadius: 32,
    width: '100%',
    padding: 8,
    color: 'white',
    marginTop: 12,
  },
});

export default Cart;
