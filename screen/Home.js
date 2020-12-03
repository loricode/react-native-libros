import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,TouchableOpacity, 
         FlatList, View} from 'react-native';
import axios from 'axios'

//components
import Card from '../components/Card'
import Form from '../components/Form'

let URL = "http://localhost/applibrolaravel/public/libro"

const Home = () => {

    const [ listaLibros, setListaLibro ] = useState([])
    const [ id, setId ] = useState('')
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
  }

  const addlibro = async() => {
     const obj = { nombre, edicion }
     const { data } = await axios.post(URL, obj)
     console.log(data)
     getlibros()  
     setModal(false) 
     clearInput()
  }

  const clearInput = () => {
    setNombre('')  
    setEdicion('')
  }

  const deleteLibro = async(id) => {
    const { data } = await axios.delete(URL+`/${id}`)
    console.log(data)
    getlibros()
  }

  const getLibro = async(idl) => {
    const { data } = await axios.get(URL+`/${idl}`)
    console.log(data)
    const { id, nombre, edicion } = data
    setId(id)
    setNombre(nombre)
    setEdicion(edicion)
    setModal(true)
  }

  const updateLibro = async() => {
    const obj = { id, nombre, edicion }
    const { data } = await axios.put(URL, obj)
    console.log(data)
    getlibros()
    clearInput()
  }


    
 const renderItem = ({ item }) => (
      <Card id={item.id}
            nombre={item.nombre}
            edicion={item.edicion}
            deleteLibro={deleteLibro}
            getLibro={getLibro} />
 )

    return (
        <View style={styles.container}>
        
          <TouchableOpacity style={styles.button}
            onPress={() => setModal(!modal)} >
            
           {modal? <Ionicons name="md-close" size={32} color="red"/>
                
            :<Ionicons name="md-add-circle" size={32} color="steelblue"/>
           }
              
           </TouchableOpacity>

 { modal? <Form 
              nombre={nombre}
              setNombre={setNombre} 
              edicion={edicion}
              setEdicion={setEdicion}
              addlibro={addlibro}
              updateLibro={updateLibro}
              /> 
       
        :<FlatList
              data={listaLibros}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              />
 }
           
            <StatusBar style="auto" />
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
   
    button: {
      marginHorizontal:5,  
      alignItems: 'center',
      backgroundColor: '#fff',
      borderColor:'',
      borderWidth:2,
      borderRadius:10,
      padding: 10
    },
  
});

export default Home;