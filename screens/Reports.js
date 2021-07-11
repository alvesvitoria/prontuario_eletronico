import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

} from "react-native";


export default function Reports({ navigation }) {
    return (
        <View style={styles.container}>   
            <TouchableOpacity style={styles.topics}>
                <Text>Histórico Completo</Text>       
            </TouchableOpacity>
            <TouchableOpacity style={styles.topics}>
                <Text>Medicamentos</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.topics}>
                <Text>Vacinas</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.topics}>
                <Text>Alergias</Text>   
            </TouchableOpacity>
        </View>
    );
   
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6EEEF'
    },
    topics: {
        width: 235, 
        height: 40, 
        position: 'relative',
        left: '17%',
        top: '25%',
        bottom: '10%',
        marginTop: 3,
        marginBottom: 10,
        backgroundColor: '#A0E6CD',
        justifyContent: 'center',
        alignItems:'center',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        borderBottomRightRadius: 28,
        borderBottomLeftRadius: 28,
    },
});


