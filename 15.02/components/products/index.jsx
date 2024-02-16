import { View, Text, TextInput, TouchableOpacity, FlatList}  from "react-native";
import styles from "./styles";


export default function Products({navigation}){
    const lista =[
        {
            id: '0',
            nome: 'X-salda',
            preco: 'R$ 25,00'
        },
        {
            id: '1',
            nome: 'X-egg',
            preco: 'R$ 23,00'
        },
        {
            id: '2',
            nome: 'X-bacon',
            preco: 'R$ 28,00'
        },
        {
            id: '3',
            nome: 'X-frango',
            preco: 'R$ 25,00'
        },
    ]

    return(
        <View style={styles.container}>
            <Text>Products</Text>

            <FlatList
                data={lista}
                numColumns={2}    
                renderItem={({item})=>
                    <View style={styles.fundo}>
                    <Text style = {styles.texto2}>Lanche: <br/>{item.nome} <br/>  Valor: <br/> {item.preco}</Text>
                    
                    </View>
                    
                }
            />

            
            <TouchableOpacity
                    style={styles.botao}
                    onPress={()=>{
                        navigation.navigate('Login')
                    }}
                >
                    <Text style={styles.texto2}>L</Text>
            </TouchableOpacity>           
            
            
        </View>
    )
}
