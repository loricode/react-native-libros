import React from 'react';

import { StyleSheet,
         TouchableOpacity,Text, View,TextInput } from 'react-native';

const Form =({setNombre, nombre, setEdicion, edicion, addlibro,updateLibro}) => {
    return (
        <View style={styles.form}>
        <View style={styles.cardView}>
        
         <TextInput
            style={styles.input}
            placeholder="Nombre"
            onChangeText={setNombre}
            value={nombre}
         />
  
         <TextInput
            style={styles.input}
            placeholder="Edicion"
            onChangeText={setEdicion}
            value={edicion}
         />
  
       <TouchableOpacity style={styles.button} onPress={addlibro}>
          <Text style={{color:'#fff',fontSize:19}}>Save</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUpdate} 
           onPress={updateLibro}>
          <Text style={{color:'#fff',fontSize:19}}>Update</Text>
          
        </TouchableOpacity>
  
        </View></View>
    );
}

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
      padding: 10,
      borderRadius:4

    },
    buttonUpdate: {
        marginHorizontal:5,  
        alignItems: 'center',
        marginTop:6,
        backgroundColor: '#13C6AB',
        padding: 10,
        borderRadius:4
  
      },
    input:{
        marginBottom:17,
        height:35,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius:6,
        fontSize:19
     },
     form: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        backgroundColor: '#fff',
        
      },
      cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        marginVertical:5,
        marginHorizontal:9,
        alignSelf:'stretch',
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        alignSelf:'stretch',
    
      },
});


export default Form