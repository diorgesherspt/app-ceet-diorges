import React from 'react';
import {Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView,{Marker} from 'react-native-maps'

export default function Contato() { return(
<View style={{padding:10,marginBottom:10}}>
  <View style={{flexDirection:'row',justifyContent:'space-evenly'}}><Icon.Button
              name="facebook"
              size={40}
              backgroundColor="#3b5998"
              onPress={() => alert('Login com Facebook')}>
            </Icon.Button>
            <Icon.Button
              name="instagram"
              size={40}
              backgroundColor="#3b5998"
              onPress={() => alert('Login com Facebook')}>
                
            </Icon.Button>
            <Icon.Button
              name="whatsapp"
              size={40}
              backgroundColor="#3b5998"
              onPress={() => alert('Login com Facebook')}>
            </Icon.Button>
            </View>
            <Text style={{fontSize:20,marginTop:10,textAlign:'center'}}>Localização</Text>
            <MapView style={{height:400,width:360,marginTop:30}} initialRegion={{latitude:-20.3368985,
            longitude:-40.2934544,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421,}}>
                <Marker coordinate={{latitude:-20.3368985,longitude:-40.2934544}} title="Ceet Vasco Coutinho"/>
            </MapView>
            </View>
)
}
