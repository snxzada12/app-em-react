import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function App() {
 
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  const apertarBotao = key => {}

  const [complementos, setComplementos] = useState([
    {complementos: 'Entre em contato', key: 1},
    {complementos: 'Colabore', key: 2},



  ])

  

  return (
      <ScrollView>
      
      <View style={styles.container}>

      <View style={styles.container}>

        <Image
          source={require('./assets/Logo.png')}
          style={styles.logo}
        />


      </View>

      
      <Text style={{color: 'white'}}> Bem Vindo </Text>

      <View style={styles.inputContainer}>
        
          <MaterialIcons name="email" size={24} color="black" />
        <TextInput 
      multiline
      style={styles.input}
      placeholder="Email"
      onChangeText={setEmail}
      />
     </View>
     
     <View style={styles.input1}>

    <View style={styles.inputContainer}>
      
        <Entypo name="key" size={24} color="black" />
      <TextInput 
      
      style={styles.input}
      multiline
      placeholder="Senha"
      onChangeText={setSenha}
      />
      </View>
      </View>

     
      <TouchableOpacity style={styles.btnSubmit} onPress={() => {}}>
                <Text style={styles.submitText}>Acessar</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister} onPress={() => {}}>
                <Text style={styles.registerText}>Criar conta gratuita</Text> 
            </TouchableOpacity>
    
    
   
      
      <StatusBar style="auto" />
    </View>

    <View style ={styles.complementos1}>
    {complementos.map(
  (item) => {
    return(
      <View  key={item.key}>
        <TouchableOpacity onPress={() => apertarBotao(item.key)}>
        <Text style={styles.lista} >{item.complementos}</Text>
        </TouchableOpacity>
      </View>
    )
  }
)}
   
  </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  
  },
  complementos1:{
    backgroundColor: '#27282D',
    justifyContent: 'center',
    alignItems: 'center',

    
  },
  lista:{
    color: 'gray',
    padding: 5,
    fontSize: 15,

  },


  logo:{
    width: 400,
    resizeMode:'contain',

  },


  Text:{
    color: 'white',

  },

  input: {
   
    padding: 10,
    margin:10,
    fontSize: 17,
    width: 300,
    marginBottom: 15,

  },
  btnSubmit: {
    backgroundColor: '#5271ff',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
},
btnRegister: {
  width: '60%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 7
},

  input1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 200,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
},

registerText: {
  color: 'gray',
  fontSize: 16,
},

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 50,
    
  },
});
