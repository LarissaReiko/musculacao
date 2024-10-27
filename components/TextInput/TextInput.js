import React from "react";
import { TextInput } from "react-native";
import StyleInput from "./Style.js";

function TextInputBox({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  style,
}) {
  return (
    <TextInput
      style={[StyleInput.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
}

export default TextInputBox;
