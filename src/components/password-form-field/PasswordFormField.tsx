import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TextFormFieldProps extends TextInputProps {
  placeholder?: string;
  label?: string;
}

const defaultColor: string = '#535353';

const TextFormField: React.FC<TextFormFieldProps> = ({
  placeholder,
  label,
  ...props
}) => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={!isVisible}
          {...props}
        />
        <TouchableOpacity
          onPress={() => setVisibility(!isVisible)}
          style={styles.icon}>
          <Icon
            name={isVisible ? 'eye-slash' : 'eye'}
            size={20}
            color={defaultColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  label: {
    color: defaultColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputContainer: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#000',
    flexDirection: 'row',
  },
  input: {
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  icon: {
    marginLeft: 'auto',
  },
});

export default TextFormField;
