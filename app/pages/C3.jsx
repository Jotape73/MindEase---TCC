import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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

const B = () => {

    const navigation = useNavigation();
    const handleC4 = () => {
        navigation.navigate('C4');
      };

  return (
    <View style={styles.container}>
      {/* Barra de progresso no topo */}
      <LessonCard
          progress={50}
        />

      {/* Card central */}
      <View style={styles.card}>
        <Text style={styles.title}>Teorias </Text>
        <Text style={styles.listItem}>• Teoria Evolutiva: A ansiedade foi essencial para nossos ancestrais sobreviverem a predadores. Hoje, em vez de fugir de tigres, fugimos de reuniões ou prazos apertados. É o mesmo sistema de alerta, mas com "ameaças" modernizadas.</Text>
        <Text style={styles.listItem}>• Teoria Psicanalítica (Freud): Segundo Freud, a ansiedade surge de conflitos internos reprimidos, como se a mente fosse um baú de memórias desconfortáveis tentando abrir sozinho.</Text>
        <Text style={styles.listItem}>• Teoria do Condicionamento (Behaviorismo): Aqui, a ideia é que aprendemos a ter medo de certas situações através de experiências ruins. Por exemplo, se você apresentou um trabalho na escola e foi criticado, pode associar futuras apresentações a algo assustador.</Text>
        <Text style={styles.listItem}>• Teoria Cognitivo-Comportamental: Nossa mente gosta de dramatizar. Pensar que "algo vai dar muito errado" pode intensificar a ansiedade. É como se seu cérebro fosse um roteirista de filmes de suspense exagerado. </Text>
      </View>

      {/* Botão na parte inferior */}
      <TouchableOpacity style={styles.button} onPress={handleC4}>
        <Text style={styles.buttonText}>&gt;</Text>
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
    marginBottom: 10,
  },
  listItem: {
    fontSize: 20,
    color: '#6c6c6c',
    textAlign: 'justify',
    marginBottom: 5,
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
});

export default B;
