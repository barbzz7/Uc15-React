import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const Home = ({navigation}: any) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
      title = 'ir pra profile'
      onPress={()=> navigation.navigate('Profile')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})