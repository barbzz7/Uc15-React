import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

const Exemplo1 = () => {

    const [contador,setcontador] =
    useState<number>(0)

    useEffect(() => {
        console.log("o componente foi renderizado")
    })



  return (
    <View>
        <text> Renderização: {contador} </text>
        <text onProgress={() => setcontador(contador +1)}>
            ➕ clique oara renderizar o componente
        </text>
    
    </View>
  )
}

export default Exemplo1

const styles = StyleSheet.create({})