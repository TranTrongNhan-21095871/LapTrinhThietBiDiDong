import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function ColorSelectionScreen () {
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = ['#C5F1FB', 'red', 'black', 'blue'];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image
          source={require('./hinh1.png')}
          style={styles.productImage}
        />
        <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng Chính Hãng</Text>
      </View>
      <Text style={styles.title}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorOptions}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorOption, { backgroundColor: color, borderColor: selectedColor === color ? 'black' : 'transparent' }]}
            onPress={() => handleColorSelect(color)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Màu đã chọn:', selectedColor)}>
        <Text style={styles.buttonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  productInfo: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection:'row'
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  colorOption: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    width:'90%',
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorSelectionScreen;