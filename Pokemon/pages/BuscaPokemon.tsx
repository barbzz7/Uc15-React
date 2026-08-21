import { useEffect, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native'

import CardPokemon from './CardPokemon'

interface Pokemon {
  id: number
  name: string
  image: string
}

function BuscaPokemon({ navigation }: any) {
  const [termo, setTermo] = useState('')
  const [busca, setBusca] = useState('')
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    async function buscarPokemons() {
      try {
        const resposta = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=20'
        )

        const dados = await resposta.json()

        const lista = dados.results

        const pokemonsComImagem = await Promise.all(
          lista.map(async (pokemon: any) => {
            const respostaPokemon = await fetch(pokemon.url)

            const dadosPokemon = await respostaPokemon.json()

            return {
              id: dadosPokemon.id,
              name: dadosPokemon.name,
              image: dadosPokemon.sprites.front_default,
            }
          })
        )

        setPokemons(pokemonsComImagem)
      } catch (error) {
        console.log('Erro ao buscar Pokémon:', error)
      }
    }

    buscarPokemons()
  }, [])

  function pesquisarPokemons() {
    setBusca(termo)
  }

  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Buscar Pokémon
      </Text>

      <Button
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do Pokémon"
        value={termo}
        onChangeText={setTermo}
      />

      <Button
        title="Pesquisar"
        onPress={pesquisarPokemons}
      />

      <FlatList
        data={pokemonsFiltrados}
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

    </View>
  )
}

export default BuscaPokemon

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  input: {
    borderWidth: 2,
    borderColor: '#999',
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },

  lista: {
    alignItems: 'center',
  },
})