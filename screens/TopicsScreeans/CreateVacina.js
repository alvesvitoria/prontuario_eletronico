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


const AddVacinaScreen = ({ navigation }) => {

  const [name, setName] = useState('')
  const [lote, setLote] = useState('')
  const [dataVacina, setDataVacina] = useState('')
  const [dataPrxVacina, setDataPrxVacina] = useState('')
  const [obs, setObs] = useState('')
  const user_id = firebase.auth().currentUser.uid;

  const onChangeName = (txtName) => {
    setName(txtName)
  }

  const onChangeLote = (txtLote) => {
    setLote(txtLote)
  }

  const onChangeDataVacina = (txtDataVacina) => {
    setDataVacina(txtDataVacina)
  }

  const onChangeDataPrxVacina = (txtDataPrxVacina) => {
    setDataPrxVacina(txtDataPrxVacina)
  }

  const onChangeObs = (txtObs) => {
    setObs(txtObs)
  }


  const insertInfos = () => {
    firebase.firestore().collection('vacinas').add({
      name: name,
      lote: lote,
      dataVacina: dataVacina,
      dataPrxVacina: dataPrxVacina,
      obs: obs,
      user_id: user_id,
    })
    navigation.navigate('VacinaList');
  } 


  return (
    <ScrollView style={styles.container}>
      <View style={styles.grade}>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Vacina"
            onChangeText={txtName => onChangeName(txtName)}
            value={name}
          />
        </View>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Lote"
            onChangeText={txtLote => onChangeLote(txtLote)}
            value={lote}
          />
        </View>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Data da vacina"
            onChangeText={txtDataVacina => onChangeDataVacina(txtDataVacina)}
            value={dataVacina}
          />
        </View>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Data da próxima dose"
            onChangeText={txtDataPrxVacina => onChangeDataPrxVacina(txtDataPrxVacina)}
            value={dataPrxVacina}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Observações"
            multiline={true}
            numberOfLines={4}
            onChangeText={txtObs => onChangeObs(txtObs)}
            value={obs}
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

export default AddVacinaScreen;

