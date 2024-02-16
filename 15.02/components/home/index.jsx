
import { View, Text, TextInput, TouchableOpacity}  from "react-native";
import styles from "./styles";
import { useState } from "react";


export default function Home({navigation}){

    return(
        <View style={styles.container}>
            <Text>Home</Text>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={()=>{
                        navigation.navigate('Products')
                    }}
                >
                    <Text style={styles.texto2}>P</Text>
                </TouchableOpacity>
                    
            
        </View>
    )
}
