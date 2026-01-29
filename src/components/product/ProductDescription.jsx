import { Stack, Typography } from '@mui/material';
import { formatToBRLCurrency } from '../../utils/format';

export const ProductDescription = ({
  installmentPrice,
  installments,
  oneTimeDiscountPercentage,
  oneTimePrice,
}) => {
  return (
    <Stack gap={1}>
      <Typography fontSize={12} lineHeight="14px" color="text.secondary">
        Em até {installments}x de {formatToBRLCurrency(installmentPrice)}
      </Typography>
      <Typography fontSize={12} lineHeight="14px" color="text.secondary">
        {formatToBRLCurrency(oneTimePrice)} à vista ({oneTimeDiscountPercentage}% de desconto)
      </Typography>
    </Stack>
  );
};
