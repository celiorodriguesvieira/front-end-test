import { email, renderSelectField, renderTextField, required } from '../../utils/form';
import { Button, Grid, MenuItem, Stack } from '@mui/material';
import { Field, reduxForm } from 'redux-form';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { TotalPrice } from '../TotalPrice/TotalPrice';

function DataClientForm({ handleSubmit }) {
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <SectionTitle title="Dados do Cliente" marginBottom={{ xs: 2, md: 3 }} />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 5 }}>
        <Field name="name" component={renderTextField} label="Nome" validate={required} />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Field
          name="email"
          component={renderTextField}
          label="Email"
          type="email"
          validate={[required, email]}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3, lg: 2 }}>
        <Field name="gender" component={renderSelectField} label="Sexo" validate={required}>
          <MenuItem value="">Selecione</MenuItem>
          <MenuItem value="Masculino">Masculino</MenuItem>
          <MenuItem value="Feminino">Feminino</MenuItem>
          <MenuItem value="Outro">Outro</MenuItem>
        </Field>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Stack alignItems="flex-end" gap={2} px={{ xs: 2, md: 0 }}>
          <Button variant="contained" onClick={handleSubmit} type="button">
            Finalizar Compra
          </Button>
          <TotalPrice />
        </Stack>
      </Grid>
    </>
  );
}

const DataClientFormRedux = reduxForm({
  form: 'dataClient',
  onSubmit: (values) => {
    console.log('DataClientForm onSubmit values:', values);
  },
})(DataClientForm);

export default DataClientFormRedux;
