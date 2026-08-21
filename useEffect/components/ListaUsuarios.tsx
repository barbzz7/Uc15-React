import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function ListaUsuarios() {
  // Estado para armazenar os usuários
  const [usuarios, setUsuarios] = useState<any[]>([]);

  // useEffect com array vazio → executa apenas uma vez, quando o componente é montado
  useEffect(() => {
    // Criamos uma função assíncrona dentro do useEffect
    const buscarUsuarios = async () => {
      try {
        console.log("Buscando dados da API...");
        
        // Faz a requisição e aguarda a resposta
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // Converte a resposta para JSON
        const dados = await resposta.json();

        // Atualiza o estado com os dados recebidos
        setUsuarios(dados);
      } catch (erro) {
        // Captura e mostra erros, se houver
        console.error("Erro ao buscar usuários:", erro);
      }
    };

    // Chama a função assíncrona
    buscarUsuarios();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>👥 Lista de Usuários</Text>
      
      {/* FlatList para exibir os dados */}
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()} // chave única
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.name}</Text> // mostra o nome do usuário
        )}
      />
    </View>
  );
}

// Estilos visuais
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 30 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 4 },
});
 