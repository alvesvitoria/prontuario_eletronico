import React, { useState, useEffect} from "react";
import { ListItem, Avatar } from "react-native-elements";
import {
  Button,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

import firebase from "../../database/firebase";


const MedicamentoList = ({ navigation }) => {
  const user_id = firebase.auth().currentUser.uid;
  const [medicamento, setMedicamento] = useState([]); // Initial empty array of users

  useEffect(() => {
    const medicamentos = firebase.firestore()
      .collection('medicamentos')
      .where('user_id', '==', user_id)
      .onSnapshot(querySnapshot => {
        const medicamento = [];
  
        querySnapshot.forEach(documentSnapshot => {
          medicamento.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setMedicamento(medicamento);
      });
  
    // Unsubscribe from events when no longer in use
    return () => medicamentos();
  }, []);

  return (
    <View>
        <Button
            onPress={() => navigation.navigate("CreateMedicamento")}
            title="Adicionar Medicação"
        />
        <FlatList
            data={medicamento}
            renderItem={({ item }) => (
            <View style={styles.itensList}>
                <Text style={{position: 'relative', left: '9%'}}>{item.name}</Text>
                <Text style={{position: 'relative', left: '9%'}}>{item.dataInicio}</Text>
                <Text style={{position: 'relative', left: '9%'}}>{item.dataFim}</Text>
                <Text style={{position: 'relative', left: '9%'}}>{item.obs}</Text>
            </View>
            )}
        />
    </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  itensList: {
    height: 100,
    width: 340,
    alignItems: 'left', 
    justifyContent: 'center', 
    position: 'relative', 
    left: '1%',
    marginRight: 1, 
    marginLeft: 9, 
    marginTop: 8,
    backgroundColor:'#F8F8FF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
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
  
});

export default MedicamentoList;