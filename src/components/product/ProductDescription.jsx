import { Stack, Typography } from '@mui/material';

export function ProductDescription({
  installments,
  installmentPrice,
  oneTimePrice,
  oneTimeDiscountPercentage,
}) {
  return (
    <Stack gap={1}>
      <Typography fontSize={12} lineHeight="16px" color="primary.main">
        Em até{installments}x de {installmentPrice}
      </Typography>

      <Typography fontSize={12} lineHeight="16px" color="primary.main">
        {oneTimePrice} à vista {oneTimeDiscountPercentage}% de desconto
      </Typography>
    </Stack>
  );
}
