import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LessonsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Cuide do Celebrerinho:</Text>
        <Image
          source={{ uri: 'https://link-da-imagem-celebrerinho.png' }} // Substitua pelo link da imagem do personagem
          style={styles.headerImage}
        />
      </View>

      {/* Título das Lições */}
      <Text style={styles.sectionTitle}>Lições</Text>

      {/* Botões de lições */}
      <View style={styles.lessonsContainer}>
        <TouchableOpacity style={styles.lessonButton}>
          <Image
            source={{ uri: 'https://link-da-imagem-primeiros-passos.png' }} // Substitua pelo link correto
            style={styles.lessonImage}
          />
          <Text style={styles.lessonText}>Primeiros passos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lessonButton}>
          <Image
            source={{ uri: 'https://link-da-imagem-ansiedade.png' }} // Substitua pelo link correto
            style={styles.lessonImage}
          />
          <Text style={styles.lessonText}>Controlando a Ansiedade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lessonButton}>
          <Image
            source={{ uri: 'https://link-da-imagem-melhora-sono.png' }} // Substitua pelo link correto
            style={styles.lessonImage}
          />
          <Text style={styles.lessonText}>Melhora de Sono</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lessonButton}>
          <Image
            source={{ uri: 'https://link-da-imagem-ajudando.png' }} // Substitua pelo link correto
            style={styles.lessonImage}
          />
          <Text style={styles.lessonText}>Ajudando outras Pessoas</Text>
        </TouchableOpacity>
      </View>

      {/* Botão central grande */}
      <TouchableOpacity style={styles.centerButton}>
        <Icon name="microphone" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Barra de navegação */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={24} color="#9e83f5" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerImage: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
    color: '#000',
  },
  lessonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  lessonButton: {
    width: '90%',
    height: 70,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lessonImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  lessonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 10,
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

export default LessonsScreen;
