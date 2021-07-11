import React, { useState, useEffect} from "react";
import { ListItem, Avatar } from "react-native-elements";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

import firebase from "../../database/firebase";


const AlergiaList = ({ navigation }) => {
  const user_id = firebase.auth().currentUser.uid;
  const [alergia, setAlergia] = useState([]); // Initial empty array of users

  useEffect(() => {
    const alergias = firebase.firestore()
      .collection('alergias')
      .where('user_id', '==', user_id)
      .onSnapshot(querySnapshot => {
        const alergia = [];
  
        querySnapshot.forEach(documentSnapshot => {
          alergia.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setAlergia(alergia);
      });
  
    // Unsubscribe from events when no longer in use
    return () => alergias();
  }, []);

  return (
    <View>
        <Button
            onPress={() => navigation.navigate("CreateAlergias")}
            title="Adicionar Alergia"
        />
        <FlatList
            data={alergia}
            renderItem={({ item }) => (
            <View style={styles.itensList}>
                <Text style={{position: 'relative', left: '9%'}}>{item.name}</Text>
                <Text style={{position: 'relative', left: '9%'}}>{item.desc}</Text>
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
    height: 88,
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

export default AlergiaList;