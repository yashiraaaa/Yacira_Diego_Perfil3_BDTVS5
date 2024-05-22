import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';

function ListaComidas({ navigation }) {
  const [comidaSeleccionada, setComidaSeleccionada] = useState('');
  const [comidas, setComidas] = useState([]);
  const opcionesComidas = [
    { nombre: 'Pizza', descripcion: 'Pizza De Piña ', imagen: require('../assets/pollo.jpeg') },
    { nombre: 'Hamburguesa', descripcion: 'Hamburguesa de Cangrejo', imagen: require('../assets/pizza.jpeg') },
    { nombre: 'Pollo', descripcion: 'Pollo con Piña', imagen: require('../assets/lasaña.jpeg') },
    { nombre: 'Lasaña', descripcion: 'Lasaña con Cangrejo', imagen: require('../assets/tacos.jpeg') },
    { nombre: 'Carne', descripcion: 'Carne de Caballo', imagen: require('../assets/pizza.jpeg') },
    { nombre: 'Tacos', descripcion: 'Tacos de Villegas ', imagen: require('../assets/pollo.jpeg') },
  ];

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Comidas que le gustan a Vallegas y a mi</Text>
      <View style={styles.contenedorInput}></View>
      <FlatList
        data={opcionesComidas}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.contenedorComida, item.nombre === comidaSeleccionada ? styles.comidaSeleccionada : null]}
            onPress={() => setComidaSeleccionada(item.nombre)}
          >
            <Image source={item.imagen} style={styles.imagenComida} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.textoComida}>{item.nombre}</Text>
              <Text style={styles.descripcionComida}>{item.descripcion}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.comidaSeleccionadaTexto}>Comida seleccionada: {comidaSeleccionada}</Text>
    </SafeAreaView>
  );
}

export default ListaComidas;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contenedorInput: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonAgregar: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotonAgregar: {
    color: 'white',
    fontWeight: 'bold',
  },
  contenedorComida: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    padding: 30,
    borderRadius: 10,
  },
  textoComida: {
    fontSize: 18,
    color: 'black',
  },
  descripcionComida: {
    fontSize: 14,
    color: 'black',
  },
  comidaSeleccionada: {
    backgroundColor: 'blue    ',
  },
  comidaSeleccionadaTexto: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagenComida: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
});
