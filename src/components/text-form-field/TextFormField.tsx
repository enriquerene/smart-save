import React from 'react';
import {TextInput, View, Text, StyleSheet, TextInputProps} from 'react-native';

interface TextFormFieldProps extends TextInputProps {
  placeholder?: string;
  label?: string;
}

const TextFormField: React.FC<TextFormFieldProps> = ({
  placeholder,
  label,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  label: {
    color: '#535353',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default TextFormField;
