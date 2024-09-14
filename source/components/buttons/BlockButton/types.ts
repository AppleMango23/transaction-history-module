import { StyleProp, TextStyle, ViewStyle } from "react-native"

export interface BlockButtonProps {
  text: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  disabled?: boolean
  isLoading?: boolean
  onPress: () => void
}
