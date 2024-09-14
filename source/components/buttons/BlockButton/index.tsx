import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import Colors from '~helpers/Colors';
import {BlockButtonProps} from './types';

export default function BlockButton({
  onPress,
  style,
  text,
  textStyle,
  disabled,
  isLoading = false,
  ...rest
}: BlockButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        disabled ? styles.disabledContainer : {},
        style,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
      {...rest}>
      {!isLoading ? (
        <Text
          style={[styles.title, disabled ? styles.disabledTitle : textStyle]}
          color={Colors.WHITE}>
          {text}
        </Text>
      ) : (
        <ActivityIndicator color={Colors.WHITE} />
      )}
    </TouchableOpacity>
  );
}
