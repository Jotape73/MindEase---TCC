import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LessonCard = ({ title, progress }) => {
    return (
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${progress}%` }]} />
          </View>
        </View>
    );
  };

const A3 = () => {

    const navigation = useNavigation();
    const handleLessonsScreen = () => {
        navigation.navigate('LessonsScreen');
      };

  return (
    <View style={styles.container}>
      {/* Barra de progresso no topo */}
      <LessonCard
          progress={50}
        />

      {/* Card central ocupando a maior parte da tela */}
      <View style={styles.card}>
        <Text style={styles.description}>
        Esses efeitos físicos e mentais frequentemente se influenciam mutuamente. Por exemplo, palpitações (físico) podem intensificar o medo de que algo está errado (mental), criando um ciclo vicioso. Reconhecer esses sinais é um passo importante para buscar estratégias de alívio, como técnicas de respiração, terapia ou suporte médico.
        </Text>

        <Image 
        source={require('../../assets/B.png')} // Substitua pelo link da imagem do personagem
        style={styles.characterImage}
      />

      </View>

      {/* Botão na parte inferior */}
      <TouchableOpacity style={styles.button} onPress={handleLessonsScreen}>
        <Text style={styles.buttonText}>CONCLUIR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  progressBar: {
    width: '100%',
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e0e0e0',
    position: 'absolute',
    top: 0,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#7a67d3',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6c6c6c',
    textAlign: 'justify',
  },
  button: {
    width: 350,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7a67d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  progressBar: {
    height: 6,
    width: 320,
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
  characterImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default A3;
