import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';


export default App = () =>
{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  function getQuote()
  {
    fetch('https://api.kanye.rest/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() =>
  {
    getQuote();
  }, []);

  return (
    <ImageBackground source={require('./assets/kanye.png')} resizeMode="cover" style={styles.back}>
    <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white', paddingTop: 40}}>
          A Wise Man Once Said
        </Text>
        <View style={styles.textBox} >
          <Text style={styles.text}>{data.quote}</Text>
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="Another One"
            fontSize='bold'
            onPress={() => getQuote()}
          />
        </View>
        <StatusBar style="auto" />
      </View>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  back: {
    flex: 1
  },
  textBox: {
    backgroundColor: '#ccc',
    borderRadius: 20,
  },
  buttonBox: {
    backgroundColor: '#add8e6',
    borderRadius: 10,
  },
  text: {
    padding: 30,
    fontSize: 24,
    textAlign: 'center'
  }
});
