import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import firebase from "../../database/firebase";
import alergico from "../../img/alergico.png"


const AddAlergiaScreen = ({ navigation }) => {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const user_id = firebase.auth().currentUser.uid;

  const onChangeName = (txtName) => {
    setName(txtName)
  }

  const onChangeDesc = (txtDesc) => {
    setDesc(txtDesc)
  }

  const insertInfos = () => {
    firebase.firestore().collection('alergias').add({
      name: name,
      desc: desc,
      user_id: user_id
    })
    navigation.navigate('AlergiaList');
  } 


  return (
    <ScrollView style={styles.container}>
      <Image source={alergico} styles={{width: 230, height: 300}}/>
      <View style={styles.grade}>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Alergia"
            onChangeText={txtName => onChangeName(txtName)}
            value={name}
          />
        </View>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Descrição"
            onChangeText={txtDesc => onChangeDesc(txtDesc)}
            value={desc}
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

export default AddAlergiaScreen;

