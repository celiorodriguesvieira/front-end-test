import { Alert, Button, Grid, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { useNavigate } from 'react-router-dom';
import { getProductsFromCart } from '../../store/cart';
import { email, renderSelectField, renderTextField, required } from '../../utils/form';
import { TotalPrice } from '../TotalPrice/TotalPrice';
import { SectionTitle } from '../SectionTitle/SectionTitle';

function DataClientForm({ handleSubmit }) {
  const navigate = useNavigate();
  const productsInCart = useSelector((state) => getProductsFromCart(state.cart));
  const hasProductsInCart = productsInCart.length > 0;
  const [cartError, setCartError] = useState(false);

  const onSubmit = (values) => {
    if (!hasProductsInCart) {
      setCartError(true);
      return;
    }
    setCartError(false);
    console.log('DataClientForm onSubmit values:', values);
    navigate('/success');
  };

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <SectionTitle title="Dados do Cliente" marginBottom={{ xs: 2, md: 3 }} />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 5 }}>
        <Field name="name" component={renderTextField} label="Nome" validate={required} />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 5 }}>
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
          {(!hasProductsInCart || cartError) && (
            <Alert severity={cartError ? 'error' : 'warning'} sx={{ width: '100%' }}>
              Adicione ao menos 1 produto ao carrinho para finalizar a compra.
            </Alert>
          )}
          <TotalPrice />
          <Button
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            type="button"
            disabled={!hasProductsInCart}
          >
            Finalizar compra
          </Button>
        </Stack>
      </Grid>
    </>
  );
}

const DataClientFormRedux = reduxForm({
  form: 'dataClient',
  destroyOnUnmount: false,
})(DataClientForm);

export default DataClientFormRedux;
