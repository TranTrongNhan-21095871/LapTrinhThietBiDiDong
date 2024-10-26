import React, {useState} from 'react';
import {Text, TouchableOpacity,View,SafeAreaView} from 'react-native';
import Screen_ListDonut from './components/Screen_ListDonut';
import DescriptionDonut from './components/DesriptionDonut';

const App=()=>{
  const [page, setPage] = useState('Screen_ListDonut');
  const handlerChangePage = (page)=>{
      setPage(page);
  };

  return(
    <View style ={{height:'100vh'}}>
      {page == 'Screen_ListDonut' ? (
        <Screen_ListDonut onPress={() => handlerChangePage('DescriptionDonut')} />
      ): page =="DescriptionDonut" ? (
        <DescriptionDonut onPress={() => handlerChangePage('Screen_ListDonut')} />
      ): page == 'Screen_ListDonut'}
    </View>

  );


};

export default App;