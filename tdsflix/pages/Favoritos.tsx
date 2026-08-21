import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native'

import CardSerie from '../components/CardSeries'

const Favoritos = ({
  favoritos,
  setFavoritos,
  navigation,
}: any) => {

  // Remove a série dos favoritos
  function removerFavorito(id: number) {

    const novaLista = favoritos.filter(
      (item: any) => item.id !== id
    )

    setFavoritos(novaLista)
  }

  return (
    <View style={styles.container}>

      {favoritos.length === 0 ? (

        // Mensagem quando não existem favoritos
        <Text style={styles.mensagem}>
          Nenhuma série favorita.
        </Text>

      ) : (

        // Lista de séries favoritas
        <FlatList
          data={favoritos}

          keyExtractor={(item) =>
            item.id.toString()
          }

          renderItem={({ item }) => (

            <CardSerie
              item={item}
              navigation={navigation}

              // A série já está nos favoritos
              favorito={true}

              // Função para remover
              removerFavorito={removerFavorito}
            />

          )}
        />

      )}

    </View>
  )
}

export default Favoritos

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
  },

  mensagem: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },

})