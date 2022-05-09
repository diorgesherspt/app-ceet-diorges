import React,{useState} from 'react';
import { Button,TextInput, Text, View, } from 'react-native';

export default function TelaContato() { 
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  return(
<View style={{padding:10,marginBottom:10}}>
            <Text style={{fontSize:20,marginTop:10,textAlign:'center'}}>Envie nos uma mensagem</Text>
            <TextInput
            style={{borderWidth:1,
            height:40,
            padding:10,
            marginTop:10,
            backgroundColor:"white"}}
            onChangeText={setUsername}
            value={username}
            placeholder="Digite seu Nome"/>
            <TextInput
            style={{borderWidth:1,
            height:40,
            padding:10,
            marginTop:10,
            backgroundColor:"white"}}
            onChangeText={setEmail}
            value={email}
            placeholder="Digite seu Email"/>
            <TextInput
            style={{borderWidth:1,
                height:120,
                padding:10,
                marginTop:10,
                backgroundColor:"white",
                marginBottom:20}}
   multiline={true}
   numberOfLines={12}
   textAlignVertical = "top"
   placeholder='Digite aqui a mensagem'/>
   <Button title="Enviar"onPress={() => alert(username+email)} />
    </View>
)
}