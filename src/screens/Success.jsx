import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { blueGrey, lightBlue } from '@mui/material/colors';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import purchaseImage from '../assets/images/purchase.png';
import { formatToBRLCurrency } from '../utils/format';
import { reset } from 'redux-form';
import { getCartTotalPrice } from '../store/cart';
import { useDispatch, useSelector } from 'react-redux';
import { actionClearCart } from '../../../../../Downloads/front-end-test/src/store/cart';

export function Success() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formValues = useSelector((state) => state.form?.dataClient?.values);
  const totalPrice = useSelector((state) => getCartTotalPrice(state.cart));
  const clientName = formValues?.name;

  const handleStartNewPurchase = () => {
    dispatch(reset('dataClient'));
    dispatch(actionClearCart());
    navigate('/');
  };

  return (
    <Box minHeight="100vh" backgroundColor={{ xs: 'white', md: blueGrey[50] }}>
      <Box maxWidth={1140} marginX="auto">
        <Grid container spacing={2} alignItems="center" justifyContent="center" height="100vh">
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Stack backgroundColor="white" borderRadius={2} alignItems="center" p={8} gap={6}>
              <Stack gap={1} textAlign="center">
                <Typography fontSize={24}>{clientName},</Typography>
                <Typography variant="body1">
                  Sua compra no valor{' '}
                  <Typography color={lightBlue[500]} component="span">
                    {formatToBRLCurrency(totalPrice)}
                  </Typography>
                  <br /> foi finalizada com sucesso.
                </Typography>
              </Stack>
              <Box
                component="img"
                width={158}
                height={130}
                src={purchaseImage}
                alt="Compra finalizada"
              />
              <Button onClick={handleStartNewPurchase} variant="contained" sx={{ maxWidth: 210 }}>
                Iniciar nova compra
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
