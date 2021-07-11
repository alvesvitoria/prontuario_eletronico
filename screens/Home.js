import { StyleSheet, Text, View, Image } from "react-native";
import React  from "react";
import logo from '../img/logo.png';

export default function Home({ navigation }) {
    return (
        <View>
            <Image source={logo} style={styles.logo}/>
            <View style={{flex: 1, flexDirection: 'row'}}>    
                <Text style={styles.topics} onPress={ () => navigation.navigate('AlergiaList') }>Alergias</Text> 
                <Text style={styles.topics} onPress={ () => navigation.navigate('VacinaList') }>Vacinas</Text>  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>  
                <Text style={styles.topics} onPress={ () => navigation.navigate('MedicamentoList') }>Medicamentos</Text> 
                <Text style={styles.topics}>Cirurgias</Text>  
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>  
                <Text style={styles.topics}>Hospitalizações</Text>     
                <Text style={styles.topics}>Exames</Text> 
            </View>
        </View>

    );
};
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6eeef'
    },
    topics: {
        width: 170, 
        height: 110, 
        backgroundColor: '#a0e6cd', 
        marginRight: 2, 
        marginLeft: 9, 
        marginTop: 10,
        fontSize: 16,
        position: 'relative',
        top: 3,
        paddingTop: 30,
        paddingLeft: 40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 8,
    },
    titleProt: {
        position: 'absolute',
        fontSize: 16,
        left: 8,    
        top: 20,
    }
    ,
    logo:{
        width: 190,
        height: 190,
        left: '26%',
    },
});




