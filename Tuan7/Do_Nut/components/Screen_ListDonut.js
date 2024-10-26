import React, {useState,useEffect } from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Image,StyleSheet,FlatList,TextInput} from 'react-native';
import  {AntDesign} from '@expo/vector-icons';

type ItemData = {
  id: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  discount: string;
  image: string; // Assuming API returns an image URL
};


const Item=({item})=>(
    <View style ={styles.itemContainer}>
      <Image source = {{uri : item.image}} style = {styles.imageDonut}/>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.money}</Text>
      </View>
      <AntDesign style = {styles.pluscircle} name="pluscircle" size={15} color="black" />
    </View>

);

export default function App({onPress}){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const api = 'https://670ea79b3e7151861655621c.mockapi.io/Donut';
    const fetchData = async() =>{
      try
      {
        const reponse = await fetch(api);
        const result = await reponse.json();
        setData(result);
      }
      catch(error){
        console.error('Error', error)
      } finally{
          setLoading(false)
      }
    };
    fetchData();


  },[]);

const renderItem = ({item}) => <Item item = {item}/>;


  return(
    <SafeAreaView style ={styles.container}>
      <Text style = {{paddingLeft:10}}>Welcome, Jala!</Text>
      <Text style ={{fontWeight: 'bold', fontSize: 20,padding:10}}>Choice you Best food</Text>
      <TextInput
        style ={styles.searchInput}
        placeholder = 'Search food '
      />
      <FlatList
        data = {data}
        renderItem = {renderItem}
        numColumns = {1}

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginVertical:10,
    flexDirection: 'column',
    justifyContent:'space-around',
  },
  itemContainer:{
    flex: 1,
    backgroundColor: 'pink',
    margin: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:'',
    flexDirection: 'row',
    padding: 10,
  },
  searchInput:{
    width: 250,
    height: 50,
    borderRadius: 5,
    borderWidth:1,
    paddingLeft:10,
    marginLeft:10,


  },
  imageDonut:{
    width: 70,
    height: 60,
    backgroundColor:'red',
      resizeMode: 'contain',

  },
  pluscircle:{
    
    
  },
})