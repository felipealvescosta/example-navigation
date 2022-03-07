import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const App = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="About" onPress={ ()=>   navigation.navigate('About')} />
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;