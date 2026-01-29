import { Typography } from '@mui/material';
import { formatToBRLCurrency } from '../../utils/format';

export function ProductPrice({ price }) {
  return (
    <Typography fontSize={18} lineHeight="21px" color="text.primary" variant="h3">
      {formatToBRLCurrency(price)}
    </Typography>
  );
}
