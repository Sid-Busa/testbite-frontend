import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

const defaultProps = {
  name: "",
  defaultValue: "",
  label: "",
  variant: "outlined",
  error: false,
  rules: {},
  control: "",
  helperText: "string",
  disabled: false,
  allowNegative: false,
  outsideLabel: "",
  background: "transparent",
  borderRadius: 0,
  textAlign: "left",
  placeholder: "",
  size: "",
  min: 0,
  max: 10000,
  padding: "8.5px 14px",
};

const NumberField = ({
  name,
  defaultValue,
  label,
  variant,
  control,
  error,
  rules,
  outsideLabel,
  background,
  borderRadius,
  textAlign,
  helperText,
  placeholder,
  size,
  min,
  max,
  padding,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <NumericFormat
          {...field}
          label={label}
          variant={variant}
          error={error}
          helperText={helperText}
          customInput={TextField}
          fullWidth
          placeholder={placeholder}
          sx={{
            input: { textAlign, padding, height: "1.4375em" },
            textarea: { textAlign },
          }}
          inputProps={{ minlength: min, maxlength: max, min, max }}
          InputProps={{
            inputProps: { minlength: min, maxlength: max, min, max },
          }}
          {...props}
        />
      )}
    />
  );
};

NumberField.defaultProps = defaultProps;

export default NumberField;
