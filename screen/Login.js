import React,{ useState } from 'react';
import { StyleSheet, Text, View,
         TextInput, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const login = () => {
   navigation.navigate('Home', { name: 'Home' })
}

  return (
    <View style={styles.container}>
      <View  style={styles.cardView}>
      
       <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
       />

       <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
       />

       <TouchableOpacity style={styles.button} onPress={login}>
         <Text style={{color:'#fff',fontSize:19}}>Entrar</Text>
       </TouchableOpacity>

      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     alignItems: 'center', 
     justifyContent: 'center' ,
     backgroundColor: '#000',   
  },
  input:{
    fontSize:19,
     marginBottom:17,
     height: 40, 
     borderColor: 'gray', 
     borderWidth: 1 
  },
  button: {
     alignItems: 'center',
     backgroundColor: '#05BF46',
     padding: 10
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


export default Login;