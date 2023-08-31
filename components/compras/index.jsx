import { Text, TouchableOpacity, View } from "react-native";

import {styles} from './styles'

export function Compras(props){

    return (
        <View style={styles.container}>
            <Text style={styles.produto} >{props.produto}</Text>

            <TouchableOpacity style={styles.button} 
                onPress = {props.onRemove}>
                <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
        </View>
    )

}