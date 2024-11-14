import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Background.png')} style={styles.backgroundImage}>
      {/* Imagem do personagem */}
      <Image 
        source={require('../../assets/Piscada.png')} // Substitua pelo link da imagem do personagem
        style={styles.characterImage}
      />

      {/* Botões de seções */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.sectionButton}>
          <Image 
            source={require('../../assets/Licao.png')} // Substitua pelo link da imagem de "Lições"
            style={styles.sectionImage}
          />
          <Text style={styles.sectionText}>Lições</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sectionButton}>
          <Image 
            source={{ uri: 'https://link-da-imagem-respirar.png' }} // Substitua pelo link da imagem de "Respirar"
            style={styles.sectionImage}
          />
          <Text style={styles.sectionText}>Respirar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sectionButton}>
          <Image 
            source={{ uri: 'https://link-da-imagem-melodias.png' }} // Substitua pelo link da imagem de "Melodias de sono"
            style={styles.sectionImage}
          />
          <Text style={styles.sectionText}>Melodias de sono</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sectionButton}>
          <Image 
            source={{ uri: 'https://link-da-imagem-citacoes.png' }} // Substitua pelo link da imagem de "Citações"
            style={styles.sectionImage}
          />
          <Text style={styles.sectionText}>Citações</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de navegação */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={24} color="#9e83f5" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <Icon name="user" size={24} color="#9e83f5" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    flexGrow: 1,
    resizeMode: 'cover',
    padding: 20,
  },
  characterImage: {
    width: 200,
    height: 200,
    margin: 30,
  },
  sectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  sectionButton: {
    width: 150,
    height: 150,
    backgroundColor: '#c0d2f0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sectionImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
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
    justifyContent: 'space-around',
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

export default HomeScreen;
