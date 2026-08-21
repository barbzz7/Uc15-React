import { StyleSheet, Text, View, Image } from 'react-native'

interface CardPokemonProps {
  id: number
  name: string
  foto: string
}

const CardPokemon = ({ id, name, foto }: CardPokemonProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: foto }}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        Id: {id}
      </Text>

      <Text style={styles.texto}>
        Nome: {name}
      </Text>
    </View>
  )
}

export default CardPokemon

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aa0a0a',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    gap: 15,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem: {
    width: 170,
    height: 150,
    borderRadius: 10,
  },

  texto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
})