import { TextInput,Text, View, StyleSheet, Image } from 'react-native';

const Input  = (props)=> {
  return(
    <View>
      <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={props.secure}
            placeholderTextColor= "grey"
        />
      </View>
    );
}
const styles = StyleSheet.create({
    input: {
    height: 50,
    borderColor: '493323',
    backgroundColor: '#F9F3DF',
    borderRadius: 5, 
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
    placeholderTextColor:'#493323'
  },
});

export default Input;