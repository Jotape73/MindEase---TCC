import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LessonCard = ({ title, image }) => {
    return (
      <View style={styles.card}>
        <Image source={image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.headerDescription}>
          O Respirar é como aquele botão de pausa que você sempre quis. Perfeito para praticar respiração profunda...
          </Text>
        </View>
      </View>
    );
  };

const TimerScreen = ({ navigation }) => {
  const [time, setTime] = useState(1);

  const increaseTime = () => {
    if (time < 10) setTime(time + 1); // Limite máximo de 10 minutos
  };

  const decreaseTime = () => {
    if (time > 1) setTime(time - 1); // Limite mínimo de 1 minuto
  };

  const handleStart = () => {
    navigation.navigate('Respirar', { time });
  };
  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
        <View style={styles.cardsContainer}>
        <LessonCard
          title="Respirar"
          image={require('../../assets/L4.png')} // Substitua pelo caminho correto da imagem
        />
          
        </View>

      {/* Seleção de Tempo */}
      <View style={styles.timeSelector}>
        <TouchableOpacity style={styles.timeButton} onPress={decreaseTime}>
          <Text style={styles.timeButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.timeText}>{time}:00</Text>
        <TouchableOpacity style={styles.timeButton} onPress={increaseTime}>
          <Text style={styles.timeButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Botão para Começar */}
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>VAMOS COMEÇAR</Text>
      </TouchableOpacity>

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
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  headerDescription: {
    fontSize: 20,
    color: '#666',
    margin: 10,
  },
  timeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  timeText: {
    fontSize: 40,
    marginHorizontal: 20,
    color: '#333',
  },
  timeButton: {
    backgroundColor: '#4F46E5',
    padding: 10,
    borderRadius: 10,
  },
  timeButtonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    fontSize: 25,
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

export default TimerScreen;
