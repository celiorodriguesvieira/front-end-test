import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material';
import TextField from '@mui/material/TextField';

export const renderTextField = ({ input, label, meta: { touched, error }, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    fullWidth
    label={label}
    variant="outlined"
    error={touched && Boolean(error)}
    helperText={touched && error ? error : ' '}
  />
);

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...rest
}) => (
  <FormControl fullWidth error={touched && Boolean(error)}>
    <InputLabel id={`${input.name}-label`}>{label}</InputLabel>
    <Select
      {...rest}
      labelId={`${input.name}-label`}
      label={label}
      value={input.value ?? ''}
      onChange={input.onChange}
      onBlur={() => input.onBlur(input.value)}
    >
      {children}
    </Select>
    <FormHelperText>{touched && error ? error : ' '}</FormHelperText>
  </FormControl>
);

export const required = (value) => (value ? undefined : 'Campo obrigatório');

export const email = (value) => {
  if (!value) return undefined;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
  return isValid ? undefined : 'Email inválido';
};
