import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Entrar = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigation = useNavigation();
  const handleHome= () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      {/* Campo de E-mail ou Telefone */}
      <Text style={styles.label}>E-mail ou telefone</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu e-mail ou telefone"
        keyboardType="email-address"
      />

      {/* Campo de Senha */}
      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon 
            name={passwordVisible ? "visibility" : "visibility-off"} 
            size={20} 
            color="#555" 
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Botão de Entrar */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText} onPress={handleHome}>Entrar</Text>
      </TouchableOpacity>

      {/* Link de Esqueci minha senha */}
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotButtonText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 80,
    padding: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#c0d2f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    position: 'relative',
    right: 35,
    paddingBottom: 12,
  },
  loginButton: {
    backgroundColor: '#b499f5',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  forgotButton: {
    marginTop: 20,
  },
  forgotButtonText: {
    color: '#555',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default Entrar;
