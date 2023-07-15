// screens/ContactDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactDetailsScreen = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{`${contact.name.first} ${contact.name.last}`}</Text>
      <Text style={styles.info}>{`Username: ${contact.login.username}`}</Text>
      <Text style={styles.info}>{`Email: ${contact.email}`}</Text>
      <Text style={styles.info}>{`Contato: ${contact.phone}`}</Text>
      <Text style={styles.info}>{`Website: ${contact.website}`}</Text>
      <Text style={styles.info}>{`Endereço: ${contact.location.street}, ${contact.location.city}, ${contact.location.state}, ${contact.location.country}, ${contact.location.postcode}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ContactDetailsScreen;
