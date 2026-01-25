import { useSelector } from 'react-redux';
import { getCartTotalPrice } from '../../store/cart';
import { Typography } from '@mui/material';
import { formatToBRLCurrency } from '../../utils/format';

export function Footer() {
  const totalPrice = useSelector((state) => getCartTotalPrice(state.cart));

  return <Typography>Total: {formatToBRLCurrency(totalPrice)}</Typography>;
}
