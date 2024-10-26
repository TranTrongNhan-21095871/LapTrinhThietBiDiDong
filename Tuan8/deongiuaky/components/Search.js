import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import { AntDesign, Foundation } from '@expo/vector-icons';

const Item = ({ item, addToCart, changePage }) => {
  const navigateCart = (item) => {
    addToCart(item);
    changePage('CART')
  }

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigateCart(item)}>
      <Image source={require('../assets/Data/product.png')} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const Search = ({ changePage, products: data, addToCart }) => {
  const [category, setCategory] = useState('1');
  const changeCategory = (num) => {
    setCategory(num);
  };
  const fillProductByCategory = (num_category) => {
    const data_filled = data.filter((item) => {
      return item.type === num_category;
    });
    return data_filled;
  };

  const [seeMore, setSeeMore] = useState(false);
  const seeAll = () => {
    setSeeMore(!seeMore);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <TouchableOpacity onPress={changePage}>
          <Foundation name="shopping-cart" size={24} color="green" />
        </TouchableOpacity>
      </View>
      <View style={styles.search_wrap}>
        <TextInput
          style={styles.search_input}
          placeholder="abc"
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.category}>
        <TouchableOpacity onPress={() => changeCategory('1')}>
          <Text
            style={[styles.category_text, category == '1' && styles.active]}>
            Vegetable
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeCategory('2')}>
          <Text
            style={[styles.category_text, category == '2' && styles.active]}>
            Seafood
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeCategory('3')}>
          <Text
            style={[styles.category_text, category == '3' && styles.active]}>
            Drinks
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header_result_search}>
        <Text style={{ fontSize: 20, color: 'green' }}>
          Order your favorite!
        </Text>
        <TouchableOpacity onPress={seeAll}>
          <Text style={{ color: 'orange', fontSize: 20 }}>See all</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ height: 400 }}>
        <FlatList
          data={
            seeMore
              ? fillProductByCategory(category)
              : fillProductByCategory(category).slice(0, 4)
          }
          renderItem={({ item }) => (
            <Item item={item} addToCart={addToCart} changePage={changePage} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
          showsHorizontalScrollIndicator={false}
          scrollEnable={false}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingTop:40,
    backgroundColor: '#f3f4f6',
    height: '100vh',
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search_wrap: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  search_input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    padding: 8,
    outline: 'none',
  },
  category: {
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 8,
  },
  category_text: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 6,
    paddingRight: 16,
    paddingLeft: 16,
    borderColor: '#ccc',
    fontSize: 14,
    color: 'blue',
  },
  active: {
    backgroundColor: 'green',
    color: 'white',
  },
  header_result_search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
  },
  item: {
    margin: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 8,
    shadowColor: '#ccc',
  },
  list: {
    justifyContent: 'space-between',
  },
});

export default Search;
