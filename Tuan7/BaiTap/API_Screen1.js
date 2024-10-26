import { Text, SafeAreaView, StyleSheet,TextInput,Image,View,Button,TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style ={styles.imageContainer} >

      </View>
     <View>
        <Text style = {styles.textheader}>
            MANAGE YOUR TASK
        </Text>
     </View>
     <View style ={styles.inputname}>
        <Image style={styles.image}  source={require('./Frame.png')}/>
        <TextInput
            style={styles.searchBar}
            
            placeholder="Enter your name"
        />
     </View>
     <View style={styles.containerbutton}>
       <TouchableOpacity style={styles.containerbutton}>
      <Text style={styles.buttonText}>GET START --></Text>
       </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageContainer:{
      width: '50%',
      height: '25%',
      
      justifyContent: 'center',
      alignItems:'center',
     
  },  
  textheader:{
    justifyContent: 'center',
    textAlign: 'center',
    color: 'darkorchid',
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchBar:{
    color: 'grey',
  },
  image:{
    marginVertical: 5,

  },
  inputname:{
    flexDirection: 'row',
    width:'80%',
    borderWidth:1,
    marginVertical: 8,
  },
  containerbutton:{
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:20,
  },
  buttonText:{
    fontSize: 15,
    backgroundColor:'cyan',
    borderRadius: 15,
    padding:8,
    marginVertical:10,
    color:'white'

  },

 
 
});
