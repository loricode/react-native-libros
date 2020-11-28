import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, 
         FlatList,Text, View,TextInput } from 'react-native';
import axios from 'axios'

//components
import Card from '../components/Card'

const URL = "http://192.168.1.1/applibrolaravel/public/libro"

const Home = () => {

    const [ listaLibros, setListaLibro ] = useState([])
    const [ nombre, setNombre ] = useState('')
    const [ edicion, setEdicion ] = useState('')
    const [ modal,  setModal ] = useState(false)


    useEffect(() => {
        getlibros()
    }, [])

  const getlibros = async () => {
        const { data } = await axios.get(URL)
        const { libros } = data
        setListaLibro(libros)
        console.log(data)
  }

  const addlibro = async() => {
     const obj = { nombre, edicion }
     const { data } = await axios.post(URL, obj)
     console.log(data)
     getlibros()  
     setModal(false) 
     clearInput()
  }

  const clearInput = () =>{
    setNombre('')  
    setEdicion('')
  }
    

  const openForm = ()=>{
    setModal(!modal)
  }
  
 const renderItem = ({ item }) => (
        <Card nombre={item.nombre} edicion={item.edicion} />
 )

    return (
        <View style={styles.container}>
        
          <TouchableOpacity
            style={styles.button}
            onPress={openForm}
          >
              <Text style={{color:'#fff', fontSize:22}}>
                { modal? 'close':'add' }
              </Text>
           </TouchableOpacity>

 { modal?  
    <View style={styles.form}>
      <View style={{borderWidth:1,padding:15,borderColor:'steelblue' }}>
      
       <TextInput
            style={styles.input}
            placeholder="Nombre"
            onChangeText={text => setNombre(text)}
            value={nombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Edicion"
        onChangeText={text => setEdicion(text)}
        value={edicion}
      />

     <TouchableOpacity style={styles.button} onPress={addlibro}>
        <Text style={{color:'#fff'}}>Save</Text>
      </TouchableOpacity>

      </View></View> : <FlatList
                        data={listaLibros}
                        renderItem={renderItem}
                         keyExtractor={item => item.id.toString()}/> }
           
            <StatusBar style="auto" />
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 18,
        color: '#fff'
    },
    button: {
      marginHorizontal:5,  
      alignItems: 'center',
      backgroundColor: 'steelblue',
      padding: 10
    },
    input:{
        marginBottom:17,
        width:230,
        height: 40, 
       
        borderColor: 'gray', 
        borderWidth: 1 
     },
     form: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        backgroundColor: '#fff',
        
      },
});

export default Home;