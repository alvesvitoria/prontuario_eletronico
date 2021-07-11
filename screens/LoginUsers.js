import React, {useState, useEffect}  from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import firebase from '../database/firebase';

import logo from '../img/logo.png';


export default function LoginUsers( { navigation } ) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function loginFirebase() {
    firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      }); 
  }

  useEffect (() =>{
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        navigation.navigate('Home');
      } else {
        console.log('Não logado');
      }
    });
  }, [])


  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo}/>

      <TextInput style={styles.input} placeholder='   Email'  onChangeText = {email => setEmail(email)} value={email} />

      <TextInput style={styles.input}  placeholder='   Senha' onChangeText = {senha => setSenha(senha)} value={senha} secureTextEntry={true} />

      <TouchableOpacity style={styles.button_entrar} onPress={() => { loginFirebase() }}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.esqueceu}>Esqueceu a senha ?</Text>

      <TouchableOpacity style={styles.button_criar} onPress={ () => navigation.navigate('SignupUsers') } >
        <Text>Criar Conta</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94E2F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 250,
    height: 250
  },
  esqueceu: {
    position: 'relative',
    top: -40
  },
  input: {
    position: 'relative',
    top: -55,
    width: 240,
    height: 30,
    backgroundColor: '#E7FFF6',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  button_entrar: {
    position:'relative',
    top: -50,
    marginTop: 15,
    width: 240,
    height: 30,
    backgroundColor: '#4BD9A7',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_criar: {
    position:'relative',
    top: -30,
    marginTop: 15,
    width: 240,
    height: 30,
    backgroundColor: '#07B1CB',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
})



