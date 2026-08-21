import { View, Text, Image, StyleSheet } from 'react-native'

export default function Perfil() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/Perfil2.jpg')}
        style={styles.imagem}
      />

      
      <Text style={styles.texto}>
         Gandalf
      </Text>

      <Text style={styles.texto}>
        Email: gandalfSirwhite@gmail.com
      </Text>

      <Text style={styles.descricao}>
        Não tenho tempo para filmes ruins. Tenho uma missão para cumprir e um Balrog para enfrentar.
        
             </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
      
  },

  imagem: {
    width: 350,
    height: 350,
    borderRadius: 200,
    marginBottom: 20,
    borderWidth: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    
  },

  texto: {
 fontSize: 20,
    color: '#000',
    marginTop: 8,
    fontWeight: 'bold',
  },

  descricao: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
})