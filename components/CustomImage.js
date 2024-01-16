import {Image, StyleSheet,View} from 'react-native';
const CustomImage = (props) => {
  return(
  <View>
     <Image style={props.style} source={props.source} />
  </View>
  );
}

export default CustomImage;