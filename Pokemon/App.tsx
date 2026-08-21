import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home'
import BuscaPokemon from './pages/BuscaPokemon'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  component={Home}/>
        <Stack.Screen name="BuscaPokemon" component={BuscaPokemon}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})