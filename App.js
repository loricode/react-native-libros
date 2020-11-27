import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList ,Text, View } from 'react-native';
import axios from 'axios'

const URL="http://192.168.1.1/applibrolaravel/public/libro" //o localhost

//components
import Card from './components/Card'

export default function App() {

  const [ listaLibros, setListaLibro ] = useState([])

  useEffect(() => {
    getlibros()
  },[])

  const getlibros = async() => {
    const { data }  = await axios.get(URL)
    const { libros } = data
    setListaLibro(libros)
    console.log(data)
  }
  
  const renderItem = ( { item }) => (
     <Card nombre={item.nombre} edicion={item.edicion} />
   ) 

  return (
    <View style={styles.container}>
      <View style={{flex: 0.2, backgroundColor: 'steelblue'}} >
        <Text style={styles.title}>Libros</Text>
      </View>
      
      <FlatList
        data={listaLibros}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
  },
  title:{
    marginTop:15,
    marginLeft:15,
    fontSize:18,
    color:'#fff'
  }
});
