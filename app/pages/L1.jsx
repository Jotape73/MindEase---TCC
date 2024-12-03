import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
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

const TopicButton = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.topicButton} onPress={onPress}>
      <View style={styles.topicButtonContent}>
        <Image source={icon} style={styles.topicIcon} />
        <Text style={styles.topicText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const L1 = () => {

    const navigation = useNavigation();
    const handleA = () => {
        navigation.navigate('A');
      };
    
      const handleB = () => {
        navigation.navigate('B');
      };
    
      const handleC = () => {
        navigation.navigate('C');
      };

      const handleHome = () => {
        navigation.navigate('HomeScreen');
      };

      const handleP = () => {
        navigation.navigate('MeuPerfil');
      };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Cabeçalho */}

        <View style={styles.cardsContainer}>
        <LessonCard
          title="Lições de Compreensão"
          progress={50}
          image={require('../../assets/L1.png')} // Substitua pelo caminho correto da imagem
        />
          <Text style={styles.headerDescription}>
            Descubra um pouco de paz ao entender a origem da ansiedade. Como o
            corpo vivencia um ataque de pânico e as possíveis causas por trás
            disso.
          </Text>
        </View>

        {/* Botões de Tópicos */}
        <TopicButton
          icon={require('../../assets/icon1.png')} // Substitua pelo caminho correto da imagem
          title="O que é ansiedade?"
          onPress={handleA}
        />
        <TopicButton
          icon={require('../../assets/icon2.png')} // Substitua pelo caminho correto da imagem
          title="Efeitos físicos e mentais"
          onPress={handleB}
        />
        <TopicButton
          icon={require('../../assets/icon3.png')} // Substitua pelo caminho correto da imagem
          title="Causas e teorias"
          onPress={handleC}
        />
      </ScrollView>

      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={handleHome}>
          <Icon name="home" size={24} color="#9e83f5" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton} onPress={handleP}>
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
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  headerDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },
  topicButton: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  topicButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  topicText: {
    fontSize: 16,
    color: '#374151',
  },
  centralButtonContainer: {
    alignItems: 'center',
    marginVertical: 16,
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
});

export default L1;
