import React, { useState } from 'react';
import {StyleSheet, View, Image,Text,TouchableOpacity,Button,TextInput} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.titleContainer} >
         <Text style={styles.headTitle}>LOGIN</Text>
      </View>
      <View style={styles.inputContainer} >
            <View style={styles.avatar} >
                  <Image style={styles.image}  source={require('./avatar_user.png')}/>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    //keyboardType="numeric"
                  />
              </View>
              <View style={styles.inputPass} >
                  <View style={styles.locked}> 
                    <Image style={styles.image}  source={require('./lock.png')}/>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    //keyboardType="numeric"
                  />
                  </View>
                  <Image style={styles.image}  source={require('./eye.png')}/>
              </View>
      </View>

     
      <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.text} >  
          <Text  style={styles.link} >CREAT ACCOUNT</Text>
          
      </View>
      
  
      
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#ecf0f1',
    padding: 30,
    backgroundColor: '#FFFF00'
  },
  titleContainer:{
    flex:1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 25,
  },
  headTitle:{
      fontSize: 50,
      fontWeight: 'bold'
  },
  inputContainer:{
    marginTop:30,
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'blue',
    justifyContent: 'space-around',
    
  },
  inputPass:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor :'grey',
    opacity: 0.5,
    height: 60,
  },
  avatar:{
    flexDirection: 'row',
    backgroundColor :'grey',
    opacity: 0.5,
    height: 60,
  },
  locked:{
    flexDirection: 'row', 
    
  },
  input:{
    fontSize: 25,
    color: 'black',
  },
  image:{
    marginTop:10,
  },
  text:{
    //paddingTop:50,
    flex: 1,
    justifyContent: 'space-around',
    height: 0,
   // backgroundColor: 'pink',
    paddingBottom:50,
  },
  
  link:{
   // flex: 1,
    //backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttonContainer :{
    //flex:1,
    marginTop: 50,
//backgroundColor: '#FFC300',
  },
  button:{
      backgroundColor: 'black',
      textAlign:'center',
      height: 60,
      justifyContent: 'center',

  },
   buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
     textAlign:'center',
  },
  

  
});
export default Flex;