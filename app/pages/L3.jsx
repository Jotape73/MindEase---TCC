import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

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
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/L1.png')} // Substitua pelo caminho correto da imagem
            style={styles.headerImage}
          />
          <Text style={styles.headerTitle}>Lições de compreensão</Text>
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
          onPress={() => console.log('Tópico 1')}
        />
        <TopicButton
          icon={require('../../assets/icon2.png')} // Substitua pelo caminho correto da imagem
          title="Efeitos físicos e mentais"
          onPress={() => console.log('Tópico 2')}
        />
        <TopicButton
          icon={require('../../assets/icon3.png')} // Substitua pelo caminho correto da imagem
          title="Causas e teorias"
          onPress={() => console.log('Tópico 3')}
        />
      </ScrollView>

      {/* Botão Central */}
      <View style={styles.centralButtonContainer}>
        <TouchableOpacity style={styles.centralButton} />
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Profile</Text>
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
  centralButton: {
    width: 70,
    height: 70,
    backgroundColor: '#FF0000',
    borderRadius: 35,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  footerText: {
    fontSize: 16,
    color: '#4F46E5',
    fontWeight: 'bold',
  },
});

export default L1;
