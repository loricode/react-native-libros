import React,{ useState } from 'react';
import { StyleSheet, Text, View,
         TextInput, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const login = ()=>{
  navigation.navigate('Home', { name: 'Home' })
}

  return (
    <View style={styles.container}>
      <View  style={{borderWidth:1,padding:15,borderColor:'#05BF46' }}>
      
       <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
       />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
       />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={{color:'#fff'}}>Entrar</Text>
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
    backgroundColor: '#fff',
    
  },
  input:{
     marginBottom:17,
     width:230,
     height: 40, 
     borderColor: 'gray', 
     borderWidth: 1 
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#05BF46',
    padding: 10
  },
});


export default Login;