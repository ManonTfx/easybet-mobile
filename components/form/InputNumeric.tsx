import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { FieldValues, Controller, Control } from 'react-hook-form';

interface InputTextProps {
  label: string;
  name: string;
  control: Control<FieldValues, string>;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    color: '#8790E0',
    width: '100%',
    borderColor: '#8790E0',
  },
});

function InputNumeric({ label, name, control }: InputTextProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }: FieldValues) => (
        <TextInput
          style={[styles.input, tw`py-3 pl-3 my-3  w-full rounded-md`]}
          returnKeyType="done"
          keyboardType="number-pad"
          placeholderTextColor="#8790E0"
          placeholder={label}
          maxLength={10}
          value={value}
          onChange={(e) => onChange(e.nativeEvent.text)}
          data-name={name}
        />
      )}
    />
  );
}
export default InputNumeric;
