// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactList from './ContactList';
import ContactDetailsScreen from './ContactDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactList} options={{ title: 'Agenda de Contatos' }} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} options={({ route }) => ({ title: route.params.contact.name.first })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
