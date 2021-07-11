import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  useColorScheme,
  TextComponent,
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = ({ navigation }) => {

  const [name, setName] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [celular, setCelular] = useState('')
  const [dataNas, setDataNas] = useState('')
  const [tipoSanguineo, setTipoSanguineo] = useState('')
  const [data, setData] = useState('')
  const user_id = firebase.auth().currentUser.uid;

  const onChangeName = (txtName) => {
    setName(txtName)
  }

  const onChangeSobrenome = (txtSobrenome) => {
    setSobrenome(txtSobrenome)
  }

  const onChangeCelular = (txtCelular) => {
    setCelular(txtCelular)
  }

  const onChangeDataNas= (txtDataNas) => {
    setDataNas(txtDataNas)
  }

  const onChangeTipoSanguineo = (txtTipoSanguineo) => {
    setTipoSanguineo(txtTipoSanguineo)
  }

  const insertInfos = () => {
    firebase.firestore().collection('users').add({
      name: name,
      sobrenome: sobrenome,
      dataNas: dataNas,
      celular: celular,
      tipoSanguineo: tipoSanguineo,
      user_id: user_id
    })
    navigation.navigate('Home');
  } 


  return (
    <ScrollView style={styles.container}>
      <Text>   Para começar, algumas pergutinhas :)</Text> 
      <View style={styles.grade}>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Nome"
            onChangeText={txtName => onChangeName(txtName)}
            value={name}
          />
        </View>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Sobrenome"
            onChangeText={txtSobrenome => onChangeSobrenome(txtSobrenome)}
            value={sobrenome}
          />
        </View>
        {/* Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Data de Nascimento"
            onChangeText={txtDataNas => onChangeDataNas(txtDataNas)}
            value={dataNas}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Celular"
            onChangeText={txtCelular => onChangeCelular(txtCelular)}
            value={celular}
          />
        </View>
        {/* Email Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder= "Tipo Sanguíneo"
            onChangeText={txtTipoSanguineo => onChangeTipoSanguineo(txtTipoSanguineo)}
            value={tipoSanguineo}
          />
        </View>
      </View>
      
      <View style={styles.button}>
        <Button title="Salvar" color="#4BD9A7" onPress={() => insertInfos() } />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  grade: {
    position: 'relative',
    top: '18%',
  },
  inputGroup: {
    flex: 1,
    padding: 9,
    marginBottom: 10,
    marginLeft: 33,
    width: 230,
    backgroundColor:'#A0E6CD',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
  },
  button:{
    width:  230, 
    position: 'relative',
    top: '20%',
    bottom: '30%',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 33,
    backgroundColor: '#4BD9A7',
    justifyContent: 'center',
    alignItems:'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  sair: {
    position: 'absolute',
    top: '2%',
    left:'90%',
  },

});

export default AddUserScreen;

