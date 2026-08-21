import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native'

const CardSerie = ({
  item,
  navigation,
  adicionarFavorito,
  removerFavorito,
  favorito,
}: any) => {

  return (
    <View style={styles.card}>

      {/* Imagem da série */}
      <Image
        source={{
          uri: item.image?.medium,
        }}
        style={styles.imagem}
      />

      <View style={styles.informacoes}>

        {/* Nome da série */}
        <Text style={styles.nome}>
          {item.name}
        </Text>

        {/* Gêneros */}
        <Text>
          Gênero: {item.genres?.join(', ')}
        </Text>

        {/* Botão de detalhes */}
        <Button
          title="Ver detalhes"
          color="#000000"
          onPress={() =>
            navigation.navigate('Detalhes', {
              serie: item,
            })
          }
        />

        {/* Botão de favorito */}
        {favorito ? (

          <Button
            title="Remover dos favoritos"
            color="#555"
            onPress={() =>
              removerFavorito?.(item.id)
            }
          />

        ) : (

          <Button
            title="Adicionar aos favoritos"
            color="#be1300"
            onPress={() =>
              adicionarFavorito?.(item)
            }
          />

        )}

      </View>

    </View>
  )
}

export default CardSerie

const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff7f7b5',
    borderRadius: 10,
  },

  imagem: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },

  informacoes: {
    flex: 1,
    marginLeft: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

})