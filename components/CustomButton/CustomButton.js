import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import StylesButton from './Style'

function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[StylesButton.buttonCase, style]}>
      <Text style={StylesButton.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}


export default CustomButton;