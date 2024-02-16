
import { View, Text, TextInput, TouchableOpacity}  from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Login({navigation}){
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    return(
        <View style={styles.container}>

            <View style={styles.texto}>
                <Text>Login</Text>
            </View>

            <View style={styles.viu}>
                <TextInput
                style={styles.caixa}
                placeholder="Username"
                onChangeText={setUser}
                value={user}
                >
                </TextInput>
            </View>

            <View style={styles.viu}>
                <TextInput
                style={styles.caixa}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPass}
                value={pass}
                >
                </TextInput>
            </View>
            
            <TouchableOpacity
                style={styles.botao}
                onPress={()=>{
                    navigation.navigate('Home')
                }}
            >
                <Text style={styles.texto2}>ENTRAR</Text>
            </TouchableOpacity>
            
        </View>
    )
}
