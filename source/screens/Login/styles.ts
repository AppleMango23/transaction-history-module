import {StyleSheet} from 'react-native';

import Colors from '~helpers/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 30,
    marginBottom: 50,
    paddingHorizontal: 5,
  },
  biometricButton: {
    backgroundColor: Colors.THEME_1,
    borderRadius: 15,
    padding: 10,
  },
  biometricButtonText: {
    color: Colors.WHITE,
    fontSize: 18,
  },
});
