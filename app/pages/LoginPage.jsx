import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  const handleEntrar= () => {
    navigation.navigate('Entrar');
  };

  return (
    <View style={styles.container}>
      {/* Imagem do cérebro */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/MIND.png')} // Substitua pelo link da imagem do cérebro
          style={styles.image}
        />
      </View>

      {/* Texto */}
      <Text style={styles.title}>Um passo de cada vez,</Text>
      <Text style={styles.subtitle}>O caminho para calma começa com você.</Text>

      {/* Botão de inscrição */}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Inscreva-se grátis</Text>
      </TouchableOpacity>

      {/* Botões de login com ícones */}
      <TouchableOpacity style={styles.loginButton}>
        <MaterialIcon name="phone" size={20} color="#555" style={styles.icon} />
        <Text style={styles.loginButtonText}>Continuar com um número de telefone</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Icon name="google" size={20} color="#555" style={styles.icon} />
        <Text style={styles.loginButtonText}>Continuar com o Google</Text>
      </TouchableOpacity>

      {/* Botão de entrada */}
      <TouchableOpacity>
        <Text style={styles.enterText} onPress={handleEntrar}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
  },
  signupButton: {
    backgroundColor: '#b499f5',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
    width: 300,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    width: 300,
  },
  loginButtonText: {
    color: '#555',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  enterText: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
