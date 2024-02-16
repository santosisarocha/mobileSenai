import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b4a3f7',        
        flex: 1
        
    },
    caixa:{
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderColor: '#fff',
        borderRadius: 10,
        width: '100%',     
        marginTop:20,
        height:30,  
        color:'#777',
        paddingLeft:10,
        fontSize: 18, 
    },
    viu:{
        width:'80%'
    },
    texto:{
        color:'#fff',
        fontSize:10,
        fontWeight:'bold',
    
    },
    texto2:{
        color:'#666',
        fontSize:20,
        
        
    },
    botao:{
        backgroundColor:"#fff",
        marginTop:20,
        width:"40%",
        alignItems:'center',
        borderRadius: 10,
    }
})

export default styles