import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlelicao = () => {
    navigation.navigate('LessonsScreen');
  };

  const handleRespirar = () => {
    navigation.navigate('RespirarT');
  };

  const openSpotifyPlaylist = () => {
    const playlistUrl = 'https://open.spotify.com/playlist/37i9dQZF1DWWKap1fTevjS?si=de23274ce67b4998';
    Linking.openURL(playlistUrl).catch((err) =>
      console.error('Erro ao abrir o link do Spotify', err)
    );
  };

  const handleCitacao = () => {
    navigation.navigate('Citacao');
  };


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Background.jpg')} style={styles.backgroundImage}>
      {/* Imagem do personagem */}
      <Image 
        source={require('../../assets/Piscada.png')} // Substitua pelo link da imagem do personagem
        style={styles.characterImage}
      />

      {/* Botões de seções */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.sectionButton} onPress={handlelicao}>
        <Image source={require('../../assets/Licao.png')} style={styles.sectionImage} />
        <Text style={styles.sectionText}>Lições</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sectionButton} onPress={handleRespirar}>
          <Image 
            source={require('../../assets/Respirar.png')} // Substitua pelo link da imagem de "Respirar"
            style={styles.sectionImage}
          />
          <Text style={styles.sectionText}>Respirar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sectionButton} onPress={openSpotifyPlaylist}>
          <Image 
            source={require('../../assets/sono.png')} // Substitua pelo link da imagem de "Melodias de sono"
            style={styles.sectionImage}
          />
          <Text style={styles.sectionText}>Melodias de sono</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sectionButton} onPress={handleCitacao}>
          <Image 
            source={require('../../assets/Citacao.png')} // Substitua pelo link da imagem de "Citações"
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
    alignItems:'center',
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
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 30,
  },
  sectionImage: {
    width: 150,
    height: 150,
    borderRadius: 25,
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 18,
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
    width: '120%',
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

export default HomeScreen;
