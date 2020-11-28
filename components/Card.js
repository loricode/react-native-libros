import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 function Card({ nombre ,edicion }) {
  
    return (
      <View style={styles.cardView}>
        <Text>Nombre: {nombre}</Text>
        <Text>Edicion: {edicion}</Text>
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