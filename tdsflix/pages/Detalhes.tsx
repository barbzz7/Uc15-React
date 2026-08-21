import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

const Detalhes = ({ route }: any) => {

  // Recebe a série enviada pela tela anterior
  const serie = route.params.serie

  return (
    <View style={styles.container}>

      
      <Image
        source={{
          uri: serie.image?.original
        }}
        style={styles.imagem}
      />

      
      <Text style={styles.nome}>
        {serie.name}
      </Text>

      
      <Text style={styles.texto}>
        Gênero: {serie.genres.join(', ')}
      </Text>

      
      <Text style={styles.texto}>
        Ano: {serie.premiered}
      </Text>

      
      <Text style={styles.texto}>
        Nota: {serie.rating?.average}
      </Text>

      
      <Text style={styles.sinopse}>
        {serie.summary?.replace(/<[^>]*>/g, '')}
      </Text>

    </View>
  )
}

export default Detalhes


const styles = StyleSheet.create({

  
  container: {
    flex: 1,
    padding: 20,
  },

  
  imagem: {
    width: '100%',
    height: 350,
    borderRadius: 10,
  },

  
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  
  texto: {
    fontSize: 16,
    marginBottom: 8,
  },

  
  sinopse: {
    fontSize: 16,
    marginTop: 15,
    lineHeight: 23,
  },

})