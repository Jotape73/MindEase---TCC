import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const MeuPerfil = () => {
  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [plate, setPlate] = useState('');
  const [tipoSexo, setTipoSexo] = useState('');

  useEffect(() => {
    getData();
  }, []);

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('user_data');
    if(value !== null) {
      const data = JSON.parse(value);
      setName(data.name);
      setBirthdate(data.birthdate);
    }
  } catch (e) {
    throw e;
  }
}

  // Função para navegar para a tela de edição
  const handleEditProfile = () => {
    navigation.navigate('EditarPerfil', {
      name,
      birthdate,
      plate,
      model,
      setName,
      setBirthdate,
      setPlate,
      setModel
    });
  };

  const handleChangePassword = () => {
    navigation.navigate('RedefinirSenha');
  };

  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Background.jpg')} style={styles.backgroundImage}>
      <ScrollView>
      <View style={styles.card2}>
        <View style={styles.profileSection}>
          <Image source={require('../../assets/h.png')} style={styles.profileIcon} />
          <Text style={styles.name}>João Pedro</Text>
        </View>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.card}>
            <Text style={styles.infoText}>Email: joao@gmail.com </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.infoText}>Telefone: 11 965287613</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.infoText}>Data de Nascimento: 11/08/2006</Text>
          </View>

          <View style={styles.card}>
            
          <Text style={styles.infoText}>Sexo:</Text>
          <View style={styles.pickerContainer}>
          <Picker
            selectedValue={tipoSexo}
            onValueChange={(itemValue) => setTipoSexo(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Selecione o seu sexo" value="" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Prefiro não informar" value="nulo" />
          </Picker>
          </View> 
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>

        {/* Botão para navegar para a tela de editar perfil */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>


        </ScrollView>
        </ImageBackground>
        
        <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={handleHome}>
          <Icon name="home" size={24} color="#9e83f5" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <Icon name="user" size={24} color="#9e83f5" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 20,
  },
  card2: {
    borderWidth: 0.3,
    borderColor: '#4F46E5',
    borderRadius: 30,
    padding: 5,
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 40,
    marginRight: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoSection: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4F46E5',
    marginTop: 185,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  editButton: {
    backgroundColor: '#4F46E5', 
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  pickerContainer: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
    justifyContent: 'center',
    marginBottom: 20,
  },
  picker: {
    height: 50,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#9e83f5',
    marginTop: 5,
  },
});

export default MeuPerfil;
