import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  
  const [nome, setENome]= useState('');
  const [email, setEmail]= useState('');
  const [senha, setSenha]= useState('');

  const cadastro = () => {
    Alert.alert('nome, email, senha')
    //Fazer chamada no back-and para cadastro.
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

        <Image style={styles.styleImage} source={require('./assets/palmeiras.png')} resizeMode='contain' />

        <TextInput placeholder='Seu nome...' style={styles.TextInput} onChangeText={text=>setNome(text)}/>
        <TextInput placeholder='Seu e-mail...' style={styles.TextInput} onChangeText={text=>setEmail(text)}/>
        <TextInput secureTextEntry={true} placeholder='Seu senha...' style={styles.TextInput} onChangeText={text=>setSenha(text)}/>

        <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
          <Text style={{color:'white', textAlign:'center'}}>Cadastrar!</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  styleImage: {
    width:'100%',
    height:350,
    marginBottom: 20,

  },
  TextInput:{
    width: '100%',
    height: 40,
    backgroundColor:'black',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  btnCadastro:{
    width: '100%',
    height: 40,
    backgroundColor: '#7b42f5',
    borderRadius: 20,
    justifyContent: 'center',
  }
});
