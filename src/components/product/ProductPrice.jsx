import { Typography } from '@mui/material';

export function ProductPrice({ price }) {
  return (
    <Typography fontSize={18} lineHeight="21px" color="primary.main">
      {price}
    </Typography>
  );
}
