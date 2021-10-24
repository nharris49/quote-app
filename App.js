import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default App = () =>
{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() =>
  {
    fetch('https://api.kanye.rest/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  return (
    <View style={styles.container}>
      <Text fontSize={30}>
        A Wise Man Once Said
      </Text>
      <Image source={require('./assets/head.gif')} />
      <View style={styles.textBox} >
        <Text style={styles.text}>{data.quote}</Text>
      </View>
      <View style={styles.buttonBox}>
        <Button
          title="Another One"
          fontSize='bold'
          onPress={() => useEffect()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    paddingHorizontal: 50

  },
  textBox: {
    backgroundColor: '#ccc',
    borderRadius: 20,
  },
  buttonBox: {
    backgroundColor: '#add8e6',
    borderRadius: 10
  },
  text: {
    padding: 30,
    fontSize: 24,
    textAlign: 'center'
  }
});
