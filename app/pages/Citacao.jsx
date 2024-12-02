import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de instalar o pacote @expo/vector-icons

const MessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Botão para fechar */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={24} color="#ffffff" />
      </TouchableOpacity>

      {/* Mensagem no centro */}
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>
          Seu dia pode estar corrido, mas você não precisa correr junto. Respire e aproveite o momento.
        </Text>
      </View>

      {/* Botão de compartilhar */}
      <TouchableOpacity style={styles.shareButton}>
        <Ionicons name="share-social-outline" size={24} color="#8B5CF6" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FA8FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#8B5CF6',
    borderRadius: 20,
    padding: 8,
  },
  messageBox: {
    backgroundColor: '#F2F2F2',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  messageText: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
  shareButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 50,
  },
});

export default MessageScreen;
