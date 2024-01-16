import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const ButtonQ = ({ mode, title, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.primary,
        mode === 'secondary' && styles.secondary,
        mode === 'form' && styles.form,
      ]}
      onPress={onPress}>
      <View>
        <Text
          style={[
            styles.fontPrimary,
            mode === 'secondary' && styles.fontSecondary,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#493323',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 15,
    marginTop: 22,
    alignItems: 'center',
    width: '60%',
  },
  secondary: {
    backgroundColor: 'transparent', // Corrected typo ('transparant' to 'transparent')
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#CE5A67',
  },
  form: {
    width: '90%',
    height: 44,
    backgroundColor: '#49417E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 12,
  },
  fontPrimary: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  fontSecondary: { fontSize: 19, color: '#CE5A67', fontWeight: 'bold' },
});

export default ButtonQ;
