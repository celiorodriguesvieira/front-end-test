import { Button, Stack, TextField } from '@mui/material';
import { ProductTitle } from './ProductTitle';
import { ProductPrice } from './ProductPrice';
import { ProductDescription } from './ProductDescription';

export function ProductContent({
  fullPrice,
  installmentPrice,
  installments,
  oneTimeDiscountPercentage,
  oneTimePrice,
  showCounter,
  title,
}) {
  const stylesWhenShowCounter = {
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    background: 'rgba(255, 255, 255, 0.8)',
  };
  return (
    <Stack sx={showCounter ? stylesWhenShowCounter : null} gap={2} alignSelf="flex-start" p={2}>
      <ProductTitle title={title} />
      <ProductPrice price={fullPrice} />
      <ProductDescription
        installmentPrice={installmentPrice}
        installments={installments}
        oneTimePrice={oneTimePrice}
        oneTimeDiscountPercentage={oneTimeDiscountPercentage}
      />
      {showCounter && (
        <>
          <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            <Button variant="contained" color="primary">
              -
            </Button>
            <TextField
              type="text"
              fullWidth
              sx={{ '& .MuiInputBase-input': { textAlign: 'center' } }}
            />
            <Button variant="contained" color="primary">
              +
            </Button>
          </Stack>
          <Button variant="contained" color="primary">
            Adicionar
          </Button>
        </>
      )}
    </Stack>
  );
}
