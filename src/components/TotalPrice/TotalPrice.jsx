import { useSelector } from 'react-redux';
import { getCartTotalPrice } from '../../store/cart';
import { Typography } from '@mui/material';
import { formatToBRLCurrency } from '../../utils/format';

export function TotalPrice() {
  const totalPrice = useSelector((state) => getCartTotalPrice(state.cart));

  return <Typography fontSize={24}>Total: {formatToBRLCurrency(totalPrice)}</Typography>;
}
