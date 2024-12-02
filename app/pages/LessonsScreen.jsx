import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LessonCard = ({ title, progress, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{`${progress}% Concluído`}</Text>
      </View>
    </View>
  );
};


const LessonsScreen = () => {
  const navigation = useNavigation();

  const handleL1 = () => {
    navigation.navigate('L1');
  };

  const handleL2 = () => {
    navigation.navigate('L2');
  };

  const handleL3 = () => {
    navigation.navigate('L3');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.cardsContainer}>
      <TouchableOpacity  onPress={handleL1}>
        <LessonCard
          title="Lições de Compreensão"
          progress={50}
          image={require('../../assets/L1.png')} // Substitua pelo caminho correto da imagem
        />
        </TouchableOpacity>

        <TouchableOpacity  onPress={handleL2}>
        <LessonCard
          title="Lições de Curto Prazo"
          progress={30}
          image={require('../../assets/L2.png')} // Substitua pelo caminho correto da imagem
        />
        </TouchableOpacity>

        <TouchableOpacity  onPress={handleL3}>
        <LessonCard
          title="Lições de Longo Prazo"
          progress={20}
          image={require('../../assets/L3.png')} // Substitua pelo caminho correto da imagem
        />
        </TouchableOpacity>

      </View>
      </ScrollView>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4F46E5',
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280',
  },
  centralButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
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

export default LessonsScreen;
