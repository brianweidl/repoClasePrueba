import React, {Component} from 'react';
import { View,
         Text,
         TouchableOpacity, 
         StyleSheet, 
         ActivityIndicator,
         FlatList, 
         Image } from 'react-native';

class Home extends Component {
    constructor(){
        super();
        this.state={
            alumnos:[
                {
                    id:1,
                    nombre: 'Ale'
                },
                {
                    id:2,
                    nombre: 'Brian'
                },
                {
                    id:3,
                    nombre: 'Facu'
                },
                {
                    id:4,
                    nombre: 'Nelson'
                },
                {
                    id:5,
                    nombre: 'Nicole'
                },
            ]

        }
    }


    render(){
        return(
            <View>
                <Text>Probando FlatList, Image y Activity Indicator</Text>
                <ActivityIndicator 
                    size='large'
                    color='red'
                />
                <Image 
                    source={require('../../assets/favicon.png')}
                    resizeMode='center'
                    style={style.image}
                />
                <FlatList 
                    data={ this.state.alumnos }
                    keyExtractor={ alumno => alumno.id.toString() }
                    renderItem={ ({item})=> <Text> El nombre del alumno es: { item.nombre }</Text> }
                />
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    image:{
        height:100
    }
})

export default Home;