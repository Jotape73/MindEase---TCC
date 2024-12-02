import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ServicoPagamento = () => {
  const navigation = useNavigation();

  const handleServicoSeguro = () => {
    navigation.navigate('ServicoSeguro');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/Background.png')} style={styles.backgroundImage}>
      {/* Seção do Dono do Veículo */}
      <View style={styles.header}>
        <View style={styles.ownerSection}>
          <FontAwesome name="user-circle" size={40} color="black" />
          <View style={styles.ownerInfo}>
            <Text style={styles.ownerText}>Dono do Veículo</Text>
            <Text style={styles.ownerName}>Luiza</Text>
          </View>
        </View>
        <View style={styles.vehicleInfo}>
          <Text style={styles.vehicleModel}>Ford Fiesta</Text>
          <Text style={styles.vehiclePlate}>RTO-6A26</Text>
        </View>
      </View>

      {/* Localização */}
      <View style={styles.locationSection}>
        <Text style={styles.locationLabel}>Local:</Text>
        <Text style={styles.locationText}>R. Rua Frederico Moura, 19, 14401150</Text>
      </View>

      {/* Problema */}
      <View style={styles.problemSection}>
        <FontAwesome name="bolt" size={40} color="black" />
        <Text style={styles.problemText}>Problema Elétrico</Text>
      </View>

      <View style={styles.separator} />

      {/* Forma de Pagamento */}
      <View style={styles.paymentSection}>
        <FontAwesome name="dollar" size={35} color="black" />
        <Text style={styles.paymentTitle}>Forma de pagamento:</Text>
        <View style={styles.paymentInfo}>
          <FontAwesome name="credit-card" size={30} color="black" />
          <Text style={styles.paymentMethod}>Cartão de Crédito</Text>
          <Text style={styles.paymentAmount}>VALOR: 350,00 r$</Text>
        </View>
      </View>
      <View style={styles.separator} />

      {/* Forma de Pagamento */}
      <View style={styles.insuranceSection}>
        <Text style={styles.insuranceTitle}>Informações do seguro:</Text>
        <Text style={styles.insuranceDetail}>Tipo: Seguro Auto Premium III</Text>
        <Text style={styles.insuranceDetail}>Apólice: 234.238-9A</Text>
        <Text style={styles.insuranceDetail}>Status: Ativo</Text>
        <Text style={styles.insuranceDetail}>Vigência: 27/03/2025</Text>
      </View>

      <View style={styles.separator} /> 

      {/*
      <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/image.png')} // Ícone do Compartilha
        style={styles.image}
        />
      </View>
      */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton} onPress={handleServicoSeguro}>
          <Text style={styles.acceptText}>Avançar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.rejectText}>Recusar</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ownerSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerInfo: {
    marginLeft: 10,
  },
  ownerText: {
    fontSize: 14,
    color: '#888',
  },
  ownerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vehicleInfo: {
    alignItems: 'flex-end',
  },
  vehicleModel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vehiclePlate: {
    fontSize: 14,
    color: '#888',
  },
  locationSection: {
    marginBottom: 20,
  },
  locationLabel: {
    fontSize: 14,
    color: '#888',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  problemSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  problemText: {
    fontSize: 18,
    marginTop: 10,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  paymentSection: {
    marginBottom: 0,
    alignItems: 'center',
  },
  paymentTitle: {
    fontSize: 16,
    marginVertical: 10,
    marginBottom: 20,
  },
  paymentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  paymentMethod: {
    fontSize: 16,
    marginLeft: -90,
  },
  paymentAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  insuranceSection: {
    marginBottom: 20,
  },
  insuranceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  insuranceDetail: {
    fontSize: 14,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#F44336',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  acceptText: {
    color: '#fff',
    fontSize: 16,
  },
  rejectText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom:0,
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ServicoPagamento;
