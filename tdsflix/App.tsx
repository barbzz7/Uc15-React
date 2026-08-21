import { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'

import Inicio from './pages/Inicio'
import Favoritos from './pages/Favoritos'
import Perfil from './pages/Perfil'
import Detalhes from './pages/Detalhes'

// Cria a navegação das abas
const Tab = createBottomTabNavigator()
// Cria a navegação entre telas
const Stack = createNativeStackNavigator()



function Tabs({ favoritos, setFavoritos }: any) {

  return (
    <Tab.Navigator>

      
      <Tab.Screen
        name="Inicio"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
        }}
      >

      
        {(props) => (
          <Inicio
            {...props}
            favoritos={favoritos}
            setFavoritos={setFavoritos}
          />
        )}

      </Tab.Screen>


    
      <Tab.Screen
        name="Favoritos"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      >

       
        {(props) => (
          <Favoritos
            {...props}
            favoritos={favoritos}
            setFavoritos={setFavoritos}
          />
        )}

      </Tab.Screen>


    
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Tab.Navigator>
  )
}


export default function App() {

  // Guarda a lista de favoritos e permite atualizar ela
  const [favoritos, setFavoritos] = useState<any[]>([])

  return (
    <NavigationContainer>

     
      <Stack.Navigator>

        {/* Tela principal que contém as abas */}
        <Stack.Screen
          name="Principal"
          options={{
            headerShown: false,
          }}
        >

         
          {() => (
            <Tabs
              favoritos={favoritos}
              setFavoritos={setFavoritos}
            />
          )}

        </Stack.Screen>


        
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            title: 'Detalhes da série',
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}
//cria duas funçoes, basicamente o tab sao minhas telas de navegaçao e o stack sao as telas que vao abrir por 
// cima das abas, como a tela de detalhes.