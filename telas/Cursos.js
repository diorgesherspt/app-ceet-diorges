import React from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'; 
import { Text, Card, Button, Icon } from 'react-native-elements';

const Cursos = () => { 
  return ( 
    <SafeAreaView style={styles.container}> 
      <ScrollView> 
        <View style={styles.container}> 
          <Card> 
            <Card.Title>Informática</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={{uri:"https://microplay.com.br/wp-content/themes/microplay/assets/images/icones/1.png"}} 
            /> 
            <Text style={{ marginBottom: 10 }}> 
              Um dos destinos mais procurados onde boa parte da arquitetura do país data dos séculos XVI a XIX. 
            </Text> 
            <Button 
              icon={ 
                <Icon 
                  name="send" 
                  type="ionicon" 
                  color="#ffffff" 
                  iconStyle={{ marginRight: 10 }} 
                /> 
              } 
              title="Acessar" 
              onPress={() => {alert('Reservado!')}} 
            /> 
          </Card> 
          <Card> 
            <Card.Title>Redes</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={{uri:"https://www.portalgsti.com.br/media/uploads/marcomascarenhas/rede-de-computadores.jpg"}}  
            /> 
            <Text style={{ marginBottom: 10 }}> 
              A Espanha é um país em movimento, com mais de vinte séculos de história. 
            </Text> 
            <Button 
              icon={ 
                <Icon 
                  name="send" 
                  type="ionicon" 
                  color="#ffffff" 
                  iconStyle={{ marginRight: 10 }} 
                /> 
              } 
              title="Acessar" 
              onPress={() => {alert('Reservado!')}} 
            /> 
          </Card> 
          <Card> 
            <Card.Title>Jogos</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={{uri:"https://p7criativo.com.br/wp-content/uploads/2021/03/Banner-01-1024x402.png"}}  
            /> 
            <Text style={{ marginBottom: 10 }}> 
              A Espanha é um país em movimento, com mais de vinte séculos de história. 
            </Text> 
            <Button 
              icon={ 
                <Icon 
                  name="send" 
                  type="ionicon" 
                  color="#ffffff" 
                  iconStyle={{ marginRight: 10 }} 
                /> 
              } 
              title="Acessar" 
              onPress={() => {alert('Reservado!')}} 
            /> 
          </Card> 
          <Card> 
            <Card.Title>Rádio Tv</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={{uri:"https://portalamm.org.br/wp-content/uploads/unnamed-5-1.jpg"}}  
            /> 
            <Text style={{ marginBottom: 10 }}> 
              A Espanha é um país em movimento, com mais de vinte séculos de história. 
            </Text> 
            <Button 
              icon={ 
                <Icon 
                  name="send" 
                  type="ionicon" 
                  color="#ffffff" 
                  iconStyle={{ marginRight: 10 }} 
                /> 
              } 
              title="Acessar" 
              onPress={() => {alert('Reservado!')}} 
            /> 
          </Card> 
        </View> 
      </ScrollView> 
    </SafeAreaView> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    paddingTop: 10, 
    backgroundColor: '#ecf0f1', 
  }, 
});

export default Cursos;