import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Compras } from "../../components/compras";
import styles from "./styles"





export function Home(){
    const [produtos, setProdutos] = useState([])
    const [nameProduto, setNameProduto] = useState('')


    function handleProdutoAdd(){
        Alert.alert("Produto Adicionado")
        setProdutos([...produtos, nameProduto])
        setNameProduto('')
        console.log(produtos)
        
    }

    function handleProdutoRemove(produto){
        Alert.alert("Removendo..." ,
                    "Você deseja realmente remover o produto: " + produto,
                    [
                        {text:"Sim", onPress: () => removeProduto(produto)},
                        {text:"Não", style: 'cancel'}
                    ]
                    )
    }

    function removeProduto(produto){

        setProdutos( prevState => prevState.filter(state => state != produto))

    }
   
    return(
        <View style = {styles.container}>
            <Text style = {styles.buyList}> Lista de Compras</Text>
            <Text style = {styles.buyDate}> Terça, 22 de Agosto de 2023</Text>

            <TextInput  style = {styles.input} 
                    onChangeText = {setNameProduto}
                    value = {nameProduto}
                    placeholder = "Nome do produto"
                 
                    

            />

            <TouchableOpacity style={styles.button} onPress={handleProdutoAdd}>
              
                <Text style = {styles.textButton}> ADICIONAR </Text>
            
            </TouchableOpacity>

            <Text style = {styles.buyList}>Produtos</Text>

            <FlatList 
                data={produtos}
                keyExtractor={produto => produto}
                renderItem={({item}) => (
                    
                    <Compras produto = {item}
                        key={item}
                        onRemove = {() => handleProdutoRemove (item)}/>

                )}
                ListEmptyComponent={() => 
                <Text style = {styles.listEmpty}> Sem produtos informado </Text>
                }

            
            />


        </View>
    )






}