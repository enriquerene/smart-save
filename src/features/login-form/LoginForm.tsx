import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextFormField from '../../components/text-form-field/TextFormField';
import PasswordFormField from '../../components/password-form-field/PasswordFormField';

function LoginForm(): React.JSX.Element {
  return (
    <View style={styles.form}>
      <TextFormField
        label="Usuário"
        placeholder="Digite seu nome de usuário..."
      />
      <PasswordFormField label="Senha" placeholder="Digite sua senha..." />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {},
});

export default LoginForm;
