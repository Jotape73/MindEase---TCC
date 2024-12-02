import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Image} from 'react-native';

const BreathingScreen = ({ route, navigation }) => {
  const { time } = route.params; // Tempo inicial em minutos
  const [remainingTime, setRemainingTime] = useState(time * 60); // Tempo restante em segundos
  const [phase, setPhase] = useState('Inspire'); // Alterna entre "Inspire" e "Expire"

  const scaleAnim = useState(new Animated.Value(1))[0]; // Valor inicial para escala
  const opacityAnim = useState(new Animated.Value(1))[0]; // Valor inicial para opacidade

  // Função para animar o círculo
  const animateBreathing = () => {
    Animated.sequence([
      // Expande o círculo (Inspire)
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 4000, // 4 segundos para inspirar
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
      // Contrai o círculo (Expire)
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 6000, // 6 segundos para expirar
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.8,
          duration: 6000,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setPhase((prev) => (prev === 'Inspire' ? 'Expire' : 'Inspire'));
      animateBreathing(); // Reinicia a animação
    });
  };

  // Reduz o tempo restante
  useEffect(() => {
    if (remainingTime <= 0) {
      navigation.goBack(); // Quando o tempo termina, volta para a tela anterior
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [remainingTime]);

  // Inicia a animação quando o componente é montado
  useEffect(() => {
    animateBreathing();
  }, []);

  // Formata o tempo restante no formato MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      {/* Texto no topo */}
      <View style={styles.header}>
        <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
      </View>

      {/* Círculo animado */}
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ scale: scaleAnim }],
              opacity: opacityAnim,
            },
          ]}
        >
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    paddingTop: 50,
  },
  characterImage: {
    width: 200,
    height: 200,
    margin: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phaseText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BreathingScreen;
