import { Image,View, Text, Button, StyleSheet, Linking,TouchableOpacity,ScrollView } from 'react-native';

import Input from '../components/CustomInput';
import ButtonQ from '../components/CustomButton';
import CustomImage from '../components/CustomImage';

export default function LoginScreen ({navigation}) {
  const bukagoogle = () => {
    Linking.openURL('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1829742877%3A1697951039794363&theme=glif');
  };

    const bukafb = () => {
    Linking.openURL('https://www.facebook.com/?locale=id_ID');
  };

  const ToPort = () => {
    navigation.navigate('Portfolio')
  }

  return (
    <ScrollView>
    <View style={styles.container}>
    <CustomImage source= {require ("../assets/Logo.png")} style={styles.logo}/>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.des}>Sign In to continue!</Text>
        <Text style={styles.email}>Email!</Text>
        <Input placeholder="Enter your email"/>
        <Text style={styles.pw}>Password</Text>
        <Input 
          placeholder="Enter Your Password"
          secure="true"
        />
        <Text style={styles.forgot}>Lupa Password? </Text>

        <ButtonQ title="SIGN IN" onPress = {ToPort} color="#CE5A67" mode="secondary"/>

        <Text style={styles.register}>Don't have an account? <Text style={{ color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Register')}> Sign Up</Text> </Text>

         <View style={{ 
          flexDirection: 'row', 
          padding:15 }}>
          
          <View style={{ 
            height: 2, 
            flex: 1, 
            backgroundColor: '#493323', 
            alignSelf: 'center',
            justifyContent: 'center'}}>
            </View>

          <Text style={{ 
            paddingHorizontal: 10, 
            fontSize: 12, 
            fontWeight: '', 
            color:'#493323' }}>
            Or Log In With</Text>

          <View style={{ 
            height: 2, 
            flex: 1, 
            backgroundColor: '#493323', 
            alignSelf: 'center'}}>
            </View>
        </View>

        <View style={{ 
          flexDirection: 'row', 
          marginBottom: 10,
          justifyContent: 'center'}}>

        <TouchableOpacity onPress={bukagoogle} 
        style={{ 
          marginLeft: 45, 
          width:120, 
          flexDirection: 'row',  
          alignItems: 'center', 
          backgroundColor: 'transparent', 
          padding: 5, 
          height: 45, 
          marginTop: 20,
          marginBottom: 20,
          borderRadius: 5, 
          borderColor: 'lightgrey', 
          borderWidth: 1, 
          paddingHorizontal: 10}}>

        <Image style={{ 
          width: 25, 
          height: 25, 
          marginRight: 10 }} 
          source={require('../assets/Google__G__Logo.svg.png')} />

        <Text style={{ 
          fontSize: 15, 
          fontWeight: '' }}>
          Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={bukafb} 
        style={{ 
          width:120, 
          marginVertical:'center', 
          marginLeft:10, 
          marginRight:20, 
          flexDirection: 'row', 
          marginTop: 20,
          marginBottom: 20,
          alignItems: 'center', 
          backgroundColor: 'transparent', 
          padding: 5, 
          height: 45, 
          borderRadius: 5, 
          borderColor: 'lightgrey', 
          borderWidth: 1, 
          paddingHorizontal: 10}}>

        <Image style={{ 
          width: 25, 
          height: 25, 
          marginRight: 10 }} 
          source={require('../assets/Facebook_f_logo_(2019).svg.png')} />

        <Text style={{ 
          fontSize: 15, 
          fontWeight: '' }}>
          Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
  logo:{
    height : 240,
    width : 335,
    marginTop: 0,
  },

  container: {
    flex: 1,
    padding: 20,
    marginTop:40,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 1,
    color: '#493323'
  },
  forgot:{
    fontSize: 13,
    textAlign: "right",
    marginBottom: 15,
    color:"blue",
  },

  des: {
    fontSize: 23,
    marginBottom: 30,
    color: "#493323",
  },

  email: {
    fontSize: 17,
    color:'#493323', 
    fontWeight: 'bold',
    textAlign:'left', 
    marginTop: 5,
    marginBottom: 10,
  },

  pw: {
    fontSize: 17,
    color:'#493323', 
    fontWeight: 'bold',
    textAlign:'left', 
    marginTop: 5,
    marginBottom: 10,
  },

   register:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10,
    marginBottom:10,
    color: "#493323",
  },

});