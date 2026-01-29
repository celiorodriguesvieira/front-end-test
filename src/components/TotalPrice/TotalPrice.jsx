import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getCartTotalPrice } from '../../store/cart';
import { formatToBRLCurrency } from '../../utils/format';

export const TotalPrice = () => {
  const totalPrice = useSelector((state) => getCartTotalPrice(state.cart));
  return (
    <Typography fontSize={24} color="text.primary">
      Total: {formatToBRLCurrency(totalPrice)}
    </Typography>
  );
};
