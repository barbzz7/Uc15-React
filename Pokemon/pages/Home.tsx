import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.areaImagem}>

        <Image
          source={require('../assets/pokemon.png')}
          style={styles.imagem}/>

        <View style={styles.botao}>
          <Button
            title="Entrar"
            onPress={() => navigation.navigate('BuscaPokemon')}
          />
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  areaImagem: {
    width: 350,
    height: 600,
    position: 'relative',
  },

  imagem: {
    width: '100%',
    height: '100%',
   
  },

  botao: {
    position: 'absolute',
    bottom: 120,
    left: 50,
    right: 50,
  },
})