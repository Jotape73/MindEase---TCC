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
    const handleB3 = () => {
        navigation.navigate('B3');
      };

  return (
    <View style={styles.container}>
      {/* Barra de progresso no topo */}
      <LessonCard
          progress={50}
        />

      {/* Card central */}
      <View style={styles.card}>
        <Text style={styles.title}>Efeitos físicos</Text>
        <Text style={styles.description}>
          A ansiedade ativa o sistema nervoso simpático, desencadeando a chamada 
          "resposta de luta ou fuga". Os sintomas físicos mais comuns incluem:
          
          {'\n\n'}• Aceleração dos batimentos cardíacos (taquicardia): o corpo se prepara para agir rapidamente.
          {'\n\n'}• Respiração curta e rápida (hiperventilação): muitas vezes resulta em tonturas ou sensação de sufocamento.
          {'\n\n'}• Sudorese: aumento na transpiração como forma de regular a temperatura corporal.
          {'\n\n'}• Tensão muscular: geralmente nas costas, pescoço e ombros, devido ao estado de alerta constante.
          {'\n\n'}• Problemas digestivos: náuseas, dores abdominais ou alterações no trânsito intestinal.
          {'\n\n'}• Fadiga: o corpo se desgasta devido à ativação prolongada do sistema de estresse.
        </Text>
      </View>

      {/* Botão na parte inferior */}
      <TouchableOpacity style={styles.button} onPress={handleB3}>
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
    fontSize: 20,
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
});

export default B;
