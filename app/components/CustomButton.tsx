import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS} from '../constants';

type CustomButtonProps = {
  colors?: Array<string>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  buttonText: string;
  buttonTextStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  colors,
  buttonContainerStyle,
  buttonText,
  buttonTextStyle,
  onPress,
}) => {
  if (colors && colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={colors}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[buttonContainerStyle]}>
          <Text
            style={[
              {textAlign: 'center', color: COLORS.white, ...FONTS.h2},
              buttonTextStyle,
            ]}>
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={[buttonContainerStyle]}>
        <Text
          style={[
            {textAlign: 'center', color: COLORS.lightGreen, ...FONTS.h2},
            buttonTextStyle,
          ]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
