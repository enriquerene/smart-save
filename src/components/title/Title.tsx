import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

interface TitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const Title: React.FC<TitleProps> = ({children, align = 'center'}) => {
  const dynamicStyle: TextStyle = {textAlign: align};
  return <Text style={[styles.title, dynamicStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
});

export default Title;
