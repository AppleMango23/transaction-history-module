import {StyleSheet} from 'react-native';

import Colors from '~helpers/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.THEME_1,
    paddingVertical: 12,
    borderRadius: 6,
  },
  title: {
    textAlign: 'center',
  },
  disabledContainer: {
    backgroundColor: Colors.LIGHT_GREY_BORDER,
  },
  disabledTitle: {
    color: Colors.GREY_TEXT_INPUT,
  },
});
