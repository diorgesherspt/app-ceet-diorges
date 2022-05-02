import React from 'react';
import { Image, Text, View } from 'react-native';


export default function TelaPrincipal() {
  return (
    <View style={{padding:10}}>
      <Text style={{textAlign:'justify'}}>O Vasco Coutinho foi fundado em 1931. A primeira unidade da escola foi denominada Escolas Reunidas Vasco Coutinho e estava 
          localizada na Rua Dom Jorge de Menezes, na Prainha de Vila Velha. Em 1932 foi iniciada a construção do prédio atual, que ficou pronto um ano depois.
           Durante 69 anos a escola funcionou no mesmo local até ser abandonada no ano 2000. Desse ano até 2002 o local abrigou uma secretaria escolar que atendia aos antigos alunos.
            No final do ano, entretanto, a escola fechou as portas e a antiga administração estadual doou o prédio para a Justiça. A escola foi depredada e saqueada e chegou a ser
             invadida. Em 2003, no primeiro ano do atual Governo, a escola voltou a pertencer ao Estado, que elaborou um projeto pedagógico e arquitetônico para o colégio.
              A ordem de serviço para o início da transformação da antiga unidade de ensino em um Centro Técnico foi dada em 21 de abril de 2004.</Text>
              <Image style={{height:300,width:350,marginTop:10}}
        source={{
          uri: 'https://www.es.gov.br/Media/PortalES/Noticias/WhatsApp%20Image%202020-09-28%20at%2012.39.37.jpeg',
        }}
      />
    </View>
  );
}

