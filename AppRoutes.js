import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaPrincipal from './telas/TelaPrincipal';
import Contato from "./telas/Contato";
import Cursos from "./telas/Cursos";
import Portal from "./telas/Portal";
import{NavigationContainer} from "@react-navigation/native"
import{Feather} from '@expo/vector-icons'


const {Navigator,Screen} = createBottomTabNavigator();

export function AppRoutes(){
  return(
    <NavigationContainer>
    <Navigator screenOptions={{headerShown:true}}>
      <Screen name="home" component={TelaPrincipal} options={{tabBarIcon:()=>{return<Feather name="home" size={25}/>}}}></Screen>
      <Screen name="Portal" component={Portal} options={{tabBarIcon:()=>{return<Feather name="globe" size={25}/>}}} ></Screen>
      <Screen name="Cursos" component={Cursos} options={{tabBarIcon:()=>{return<Feather name="book" size={25}/>}}}></Screen>
      <Screen name="Contato" component={Contato} options={{tabBarIcon:()=>{return<Feather name="phone" size={25}/>}}}></Screen>
    </Navigator>
    </NavigationContainer>
  )
}
