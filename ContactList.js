// components/ContactList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Importe o useNavigation

const API_URL = 'https://randomuser.me/api/?results=10';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const navigation = useNavigation(); // Inicialize a navegação

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(API_URL);
      setContacts(response.data.results);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleContactPress = (contact) => {
    navigation.navigate('ContactDetails', { contact });
  };

  const renderContact = ({ item }) => (
    <TouchableOpacity onPress={() => handleContactPress(item)} style={styles.contactItem}>
      <Text style={styles.name}>{`${item.name.first} ${item.name.last}`}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda de Contatos</Text>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
});

export default ContactList;
