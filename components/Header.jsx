import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { primary } from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18
  }
});
 
export default Header;