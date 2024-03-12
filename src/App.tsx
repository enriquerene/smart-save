import React from 'react';
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
import TextFormField from './components/text-form-field/TextFormField';
import PasswordFormField from './components/password-form-field/PasswordFormField';
import paletteColors from './themes/paletteColors';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <TextFormField
            label="Usuário"
            placeholder="Digite seu nome de usuário..."
          />
          <PasswordFormField label="Senha" placeholder="Digite sua senha..." />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: paletteColors.main.primary,
    flex: 1,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flexBasis: '100%',
    justifyContent: 'flex-end',
  },
  form: {
    paddingBottom: 240,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    flexBasis: '70%',
  },
});

export default App;
