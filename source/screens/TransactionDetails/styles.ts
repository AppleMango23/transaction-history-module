import {StyleSheet} from 'react-native';
import Colors from '~helpers/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textStandard: {
    marginVertical: 10,
    color: Colors.WHITE,
  },
  paymentIdText: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.WHITE,
  },
  cardDetails: {
    padding: 20,
    backgroundColor: Colors.RED_BACKGROUND,
    borderWidth: 0.3,
    borderColor: Colors.GREY_TEXT_INPUT,
    borderRadius: 10,
    width: '95%',
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
