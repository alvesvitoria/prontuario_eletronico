import React, { useState, useEffect} from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";

import firebase from "../../database/firebase";


const VacinaList = ({ navigation }) => {
  const user_id = firebase.auth().currentUser.uid;
  const [vacinas, setVacinas] = useState([]); // Initial empty array of users

  useEffect(() => {
    const vacinas = firebase.firestore()
      .collection('vacinas')
      .where('user_id', '==', user_id)
      .onSnapshot(querySnapshot => {
        const vacinas = [];
  
        querySnapshot.forEach(documentSnapshot => {
           vacinas.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setVacinas(vacinas);
      });
  
    // Unsubscribe from events when no longer in use
    return () => vacinas();
  }, []);

  return (
    <View>
        <Button
            onPress={() => navigation.navigate("CreateVacina")}
            title="Adicionar Vacina"
        />
        <FlatList
            data={vacinas}
            renderItem={({ item }) => (
            <View style={styles.itensList}>
                <Text style={{position: 'relative', left: '9%'}}>Vacina: {item.name}</Text>
                <Text style={{position: 'relative', left: '9%'}}>Lote: {item.lote}</Text>
                <Text style={{position: 'relative', left: '9%'}}>Data Vacina: {item.dataVacina}</Text>
                <Text style={{position: 'relative', left: '9%'}}>Data Próxima Dose: {item.dataPrxVacina}</Text>
                <Text style={{position: 'relative', left: '9%'}}>Obs:. {item.obs}</Text>
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
    height: 94,
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

export default VacinaList;