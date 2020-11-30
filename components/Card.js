import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

 function Card({ id , nombre ,edicion,deleteLibro }) {
  
    return (
      <View style={styles.cardView}>
        <Text>Nombre: {nombre}</Text>
        <Text>Edicion: {edicion}</Text>
     
        <View style={{flexDirection:'row-reverse'}}>

          <TouchableOpacity style={{marginHorizontal:6}} >
           <Ionicons name="md-create" size={32} color="green" />
          </TouchableOpacity>
          
         <TouchableOpacity style={{marginHorizontal:6}}
           onPress={deleteLibro.bind(this, id)} >
           <Ionicons name="md-trash" size={32} color="red" />
        </TouchableOpacity>
        
        </View>
        
      </View>
    );
  }
  
const styles = StyleSheet.create({
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
  export default Card;