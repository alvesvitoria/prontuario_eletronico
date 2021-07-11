import React, { useState, useEffect} from "react";
import { ListItem, Avatar } from "react-native-elements";
import {
  Button,
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
} from "react-native";

import firebase from "../database/firebase";
import userProfile from '../img/profile-user.png';

const ProfileScreen = ({ navigation }) => {

  function logOutFirebase(){
    firebase.auth().signOut().then(function() {
      navigation.navigate('LoginUsers');
    }).catch(function(error) {
      alert('Falha')
    });
    
  }

  const user_id = firebase.auth().currentUser.uid;
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    let subscriber = firebase.firestore()
      .collection('users')
      .where('user_id', '==', user_id)
      .onSnapshot(querySnapshot => {
        const users = [];
  
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setUsers(users);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.sair} onPress={() => { logOutFirebase() }}>Sair</Text> 
        <Image source={userProfile} style={styles.logo}/>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={{ height: 170, alignItems: 'left', justifyContent: 'center', position: 'relative', top: '15%', left: '18%', bottom: '4%' }}>
            <Text style={{position: 'relative', left: '22%', fontWeight: 'bold', marginBottom: '4%' }}>{item.name} {item.sobrenome}</Text>
            <Text>Data de Nascimento:  {item.dataNas}</Text>
            <Text>Contato:  {item.celular}</Text>
            <Text>Tipo Sanguíneo:  {item.tipoSanguineo}</Text>
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
  infos: {
    flex: 1,
    padding: 9,
    marginBottom: 10,
    marginLeft: 33,
    marginTop: '30%',
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
    top: '5%',
    left:'83%',
  },
  logo:{
    width: 70,
    height: 70,
    position: 'relative',
    left: '39%',
    top: '36%',
  },

});

export default  ProfileScreen;