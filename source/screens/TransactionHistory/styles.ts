import {StyleSheet} from 'react-native';

import Colors from '~helpers/Colors';

export const styles = StyleSheet.create({
  transactionItemWrapper: {
    justifyContent: 'space-between',
    borderColor: Colors.GREY_TEXT_INPUT,
    borderWidth: 0.3,
    borderRadius: 10,
    margin: 10,
    padding: 13,
  },
  transactionText: {
    flex: 1,
  },
  transactionDate: {
    fontSize: 12,
    flex: 1,
  },
  transactionTextDeduct: {
    color: Colors.RED_TEXT_BORDER,
    textAlign: 'right',
  },
  transactionType: {
    textAlign: 'right',
  },
  transactionItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
