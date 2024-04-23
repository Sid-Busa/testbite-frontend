import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const defaultProps = {
  name: "",
  defaultValue: "",
  label: "",
  variant: "outlined",
  error: false,
  control: "",
  rules: {},
  type: "text",
  helperText: "string",
  disabled: false,
  multiline: false,
  rows: 4,
  background: "transparent",
  borderRadius: 0,
  textAlign: "left",
  outsideLabel: "",
  size: "",
  // min: 0,
  // max: 100000000000000000000000,
};

const TextInput = ({
  name,
  defaultValue,
  label,
  variant,
  control,
  error,
  rules,
  type,
  helperText,
  multiline,
  rows,
  background,
  borderRadius,
  textAlign,
  outsideLabel,
  size,
  // min,
  max = 256,
  inputProps,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...props}
          {...field}
          fullWidth
          type={type}
          label={label}
          variant={variant}
          error={error}
          helperText={helperText}
          multiline={multiline}
          rows={rows}
          sx={{ input: { textAlign }, textarea: { textAlign } }}
          inputProps={{ maxLength: max }}
          size={size}
          onChange={(value) => {
            field.onChange(value);
            props?.onChange && props?.onChange(value, name);
          }}
          InputProps={inputProps}
        />
      )}
    />
  );
};

TextInput.defaultProps = defaultProps;

export default TextInput;
