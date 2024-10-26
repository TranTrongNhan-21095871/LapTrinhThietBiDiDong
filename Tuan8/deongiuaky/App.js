import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Home from './components/Home';
import Search from './components/Search';
import Cart from './components/Cart';

const App = () => {
  const [page, setPage] = useState('HOME');
  const changePage = (page) => {
    setPage(page);
  };

  const products = [
    {
      id: 1,
      image: '../assets/Data/product.png',
      name: 'Apple Vegetable',
      type: '1',
      price: '15',
    },
    {
      id: 11,
      image: '../assets/Data/product.png',
      name: 'Oi',
      type: '1',
      price: '17',
    },
    {
      id: 12,
      image: '../assets/Data/product.png',
      name: 'Sau rieng',
      type: '1',
      price: '28',
    },
    {
      id: 13,
      image: '../assets/Data/product.png',
      name: 'Nho',
      type: '1',
      price: '39',
    },
    {
      id: 14,
      image: '../assets/Data/product.png',
      name: 'mang cut',
      type: '1',
      price: '115',
    },
    {
      id: 15,
      image: '../assets/Data/product.png',
      name: 'Apple Vegetable',
      type: '1',
      price: '96',
    },
    {
      id: 16,
      image: '../assets/Data/product.png',
      name: 'Apple Vegetable',
      type: '1',
      price: '145',
    },
    {
      id: 2,
      image: '../assets/Data/product.png',
      name: 'Apple 2',
      type: '2',
      price: '47',
    },
    {
      id: 3,
      image: '../assets/Data/product.png',
      name: 'Apple 3',
      type: '3',
      price: '26',
    },
    {
      id: 4,
      image: '../assets/Data/product.png',
      name: 'Apple 3',
      type: '3',
      price: '46',
    },
    {
      id: 5,
      image: '../assets/Data/product.png',
      name: 'Apple 1',
      type: '1',
      price: '247',
    },
    {
      id: 6,
      image: '../assets/Data/product.png',
      name: 'Apple 2',
      type: '2',
      price: '269',
    },
  ];

  const [dataCart, setDataCart] = useState([]);
  const addToCart = (item) => {
    setDataCart((prevItems) => [...prevItems, item]);
  };

  return (
    <View>
      {page == 'HOME' ? (
        <Home changePage={() => changePage('SEARCH')} />
      ) : page == 'SEARCH' ? (
        <Search addToCart={addToCart} products={products} changePage={changePage} />
      ) : (
        <Cart dataCart={dataCart} changePage={changePage} />
      )}
    </View>
  );
};

export default App;
