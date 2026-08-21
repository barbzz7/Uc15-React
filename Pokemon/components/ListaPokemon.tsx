import { FlatList, StyleSheet } from 'react-native'
import CardPokemon from '../pages/CardPokemon'

interface Pokemon {
  id: number
  name: string
  image: string
}

interface ListaPokemonProps {
  pokemons: Pokemon[]
}

const ListaPokemon = ({ pokemons }: ListaPokemonProps) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <CardPokemon
          id={item.id}
          name={item.name}
          foto={item.image}
        />
      )}
      contentContainerStyle={styles.lista}
    />
  )
}

export default ListaPokemon

const styles = StyleSheet.create({
  lista: {
    alignItems: 'center',
  },
})