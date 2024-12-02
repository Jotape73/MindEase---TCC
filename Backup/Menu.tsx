import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch, Image} from 'react-native';

export default function Menu() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image.png')} // Ícone do WhatsApp
        style={styles.image}
        />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Meu perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Histórico de Serviços</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buscar por ocorrências</Text>
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Disponível para atendimento:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#34C759" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1D2A63',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  switchText: {
    fontSize: 16,
    marginRight: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom:50,
  },
});