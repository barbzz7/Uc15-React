import { useEffect, useState } from 'react'

import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native'

import CardSerie from '../components/CardSeries'

const Inicio = ({
  navigation,
  favoritos,
  setFavoritos,
}: any) => {

  // Guarda as séries que aparecem na tela
  const [series, setSeries] = useState<any[]>([])
  // Guarda o que foi digitado na pesquisa
  const [pesquisa, setPesquisa] = useState('')


  // Busca todas as séries quando a tela abre
  useEffect(() => {

    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((dados) => {
        setSeries(dados)
      })

  }, [])


  // Pesquisa as séries pelo nome
  function pesquisarSeries(texto: string) {

    // Guarda o texto 
    setPesquisa(texto)

    // Se não tiver nada digitado,
    // mostra todas as séries novamente
    if (texto.trim() === '') {

      fetch('https://api.tvmaze.com/shows')
        .then((res) => res.json())
        .then((dados) => {
          setSeries(dados)
        })

      return
    }


    //  pesquisa na API
    fetch(
      `https://api.tvmaze.com/search/shows?q=${texto}`
    )
      .then((res) => res.json())
      .then((dados) => {

        // Pega so os dados das séries
        const resultados = dados.map(
          (item: any) => item.show
        )

        setSeries(resultados)
      })
  }


  // Adiciona uma série aos favoritos
  function adicionarFavorito(item: any) {

    // Verifica se a série já tem
    const existe = favoritos.find(
      (serie: any) => serie.id === item.id
    )

    // Se não existir, adiciona
    if (!existe) {

      setFavoritos([
        ...favoritos,
        item,
      ])
    }
  }


  // Remove uma série dos favoritos
  function removerFavorito(id: number) {

    // Cria uma nova lista sem a série escolhida
    const novaLista = favoritos.filter(
      (item: any) => item.id !== id
    )

    setFavoritos(novaLista)
  }


  return (
    <View style={styles.container}>

     
      <TextInput
        style={styles.input}
        placeholder="Pesquisar séries..."
        value={pesquisa}
        onChangeText={pesquisarSeries}
      />


     
      {series.length === 0 ? (

        <Text style={styles.mensagem}>
          Nenhuma série encontrada.
        </Text>

      ) : (

        <FlatList
          data={series}

          keyExtractor={(item) =>
            item.id.toString()
          }

          renderItem={({ item }) => (

            <CardSerie

              item={item}

              navigation={navigation}

              adicionarFavorito={
                adicionarFavorito
              }

              removerFavorito={
                removerFavorito
              }

              // Verifica se a série está nos favoritos
              favorito={favoritos.some(
                (serie: any) =>
                  serie.id === item.id
              )}

            />

          )}

        />

      )}

    </View>
  )
}

export default Inicio


const styles = StyleSheet.create({

 
  container: {
    flex: 1,
    padding: 15,
     backgroundColor: '#490b0bff',
  },

  
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
  },

  
  mensagem: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 30,
  },

})