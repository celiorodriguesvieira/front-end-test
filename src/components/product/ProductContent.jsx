import { Button, Stack, TextField } from '@mui/material';
import { ProductTitle } from './ProductTitle';
import { ProductPrice } from './ProductPrice';
import { ProductDescription } from './ProductDescription';
import { RoundedButton } from '../RoundedButton/RoundedButton';
import addIcon from '../../assets/svg/add.svg';
import removeIcon from '../../assets/svg/remove.svg';

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
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  };
  return (
    <Stack
      sx={showCounter ? stylesWhenShowCounter : null}
      gap={2}
      alignSelf="flex-start"
      p={2}
      width="100%"
    >
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
          <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
            <RoundedButton onClick={() => onRemoveFromCart(id)}>
              <img src={removeIcon} alt="remover"></img>
            </RoundedButton>
            <TextField
              value={quantity}
              type="text"
              fullWidth
              size="small"
              sx={{ '& .MuiInputBase-input': { textAlign: 'center' } }}
            />
            <RoundedButton onClick={() => onAddToCart(id, fullPrice)}>
              <img src={addIcon}></img>
            </RoundedButton>
          </Stack>
          <Button variant="contained" color="secondary">
            Adicionar
          </Button>
        </>
      )}
    </Stack>
  );
}
