//Estructura base de un componente con estado
import React, { Component } from 'react';

//1 Componentes de navegación
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import de íconos
import { FontAwesome, Foundation } from '@expo/vector-icons'


//2Importar las pantallas
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';

//3 Guardar la ejecución de createBottomTabNavigator
const Tab = createBottomTabNavigator();

//4 Armar el compoente con el render del menú

class Menu extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            //Armar el menú
           <NavigationContainer>
               <Tab.Navigator>
                    <Tab.Screen 
                        name='Home' 
                        component={ Home }
                        options={
                            { tabBarIcon: () => <Foundation name="home" size={24} color="black" /> }
                        }
                        />
                    <Tab.Screen name='Login' component={ Login }/>
                        <Tab.Screen name='Register' component={ Register }/>
               </Tab.Navigator>
           </NavigationContainer> 

        )
    }
}

export default Menu

