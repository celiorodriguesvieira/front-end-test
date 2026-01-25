import { Button, Stack, TextField } from '@mui/material';
import { ProductTitle } from './ProductTitle';
import { ProductPrice } from './ProductPrice';
import { ProductDescription } from './ProductDescription';

export function ProductContent({
  id,
  fullPrice,
  installmentPrice,
  installments,
  oneTimeDiscountPercentage,
  oneTimePrice,
  showCounter,
  title,
  onAddToCart,
  onRemoveFromCart,
  quantity = 0,
}) {
  const stylesWhenShowCounter = {
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    background: 'rgba(255, 255, 255, 0.9)',
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
            <Button variant="contained" color="primary" onClick={() => onRemoveFromCart(id)}>
              -
            </Button>
            <TextField
              value={quantity}
              type="text"
              fullWidth
              sx={{ '& .MuiInputBase-input': { textAlign: 'center' } }}
            />
            <Button variant="contained" color="primary" onClick={() => onAddToCart(id, fullPrice)}>
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
