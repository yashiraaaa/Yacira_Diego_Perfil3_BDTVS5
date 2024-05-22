import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// Importa las imágenes desde la carpeta local
import yaciraIMG from '../assets/yacira.jpg';
import villegasIMG from '../assets/foto_villegas.jpg';

function Nombres() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image 
            source={yaciraIMG} 
            style={styles.photo} 
          />
          <Text style={styles.name}>Yacira Elisheba Gutiérrez Castillo</Text>
          <Text style={styles.id}>Carnet: 20190142</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={villegasIMG} 
            style={styles.photo} 
          />
          <Text style={styles.name}>Diego Fernando Villegas Goméz</Text>
          <Text style={styles.id}>Carnet: 20220382</Text>
        </View>
      </View>
    );
}

export default Nombres; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#819EB2',
      borderRadius: 10,
      padding: 40,
      alignItems: 'center',
      marginBottom: 20,
      width: '70%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    photo: {
      width: 150,
      height: 150,
      borderRadius: 10,
      marginBottom: 10,

    },
    name: {
      fontSize: 20,
      fontWeight: 'light',
      textAlign: 'center',
      marginBottom: 10,
    },
    id: {
      fontSize: 18
    },
});
