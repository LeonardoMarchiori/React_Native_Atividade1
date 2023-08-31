import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({

    container:{
        backgroundColor: '#131016', 
        flex: 1, 
        padding: 24,
    },
    buyList:{
        color: '#fff', 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginTop: 48
    },
  
    buyDate:{
      color: '#6b6b6b', 
      fontSize: 16
    },
  
    input:{
        backgroundColor: '#1f1e25',
        height: 56,
        color: '#fff',
        fontSize: 18,
        padding: 16,
        borderRadius: 5,
        marginRight: 10,
        marginTop: 15,
    },

    button:{
        height: 56,
        backgroundColor: '#31CF67',
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 15,
     
    },


    textButton:{
        color:'#fff',
        fontSize:25,
      
    },
        
    listEmpty:{
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
      },
  
})