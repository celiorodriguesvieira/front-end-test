import { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import addIcon from '../../assets/svg/add.svg';
import removeIcon from '../../assets/svg/remove.svg';
import { RoundedButton } from '../RoundedButton/RoundedButton';
import { ProductDescription } from './ProductDescription';
import { ProductPrice } from './ProductPrice';
import { ProductTitle } from './ProductTitle';

const stylesWhenShowCounter = {
  position: 'absolute',
  bottom: 0,
  zIndex: 1,
  background: 'rgba(255, 255, 255, 0.9)',
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
};

export const ProductContent = ({
  id,
  title,
  fullPrice,
  installments,
  installmentPrice,
  oneTimePrice,
  oneTimeDiscountPercentage,
  showCounter = false,
  onAddToCart,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  return (
    <Stack
      gap={2}
      alignSelf="flex-start"
      p={2}
      sx={showCounter ? stylesWhenShowCounter : null}
      width="100%"
    >
      <Stack gap={2}>
        <ProductTitle title={title} />
        <ProductPrice price={fullPrice} />
        <ProductDescription
          installments={installments}
          oneTimeDiscountPercentage={oneTimeDiscountPercentage}
          oneTimePrice={oneTimePrice}
          installmentPrice={installmentPrice}
        />
      </Stack>
      {showCounter ? (
        <>
          <Stack display="flex" flexDirection="row" gap={1} alignItems="center">
            <RoundedButton
              disabled={selectedQuantity <= 0}
              onClick={() => setSelectedQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
            >
              <img src={removeIcon} alt="Remover" />
            </RoundedButton>
            <TextField
              type="text"
              fullWidth
              size="small"
              value={selectedQuantity}
              sx={{ '& .MuiInputBase-input': { textAlign: 'center' } }}
            />
            <RoundedButton onClick={() => setSelectedQuantity((prev) => prev + 1)}>
              <img src={addIcon} alt="Adicionar" />
            </RoundedButton>
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              if (selectedQuantity > 0) {
                onAddToCart(id, fullPrice, selectedQuantity);
                setSelectedQuantity(0);
              }
            }}
          >
            Adicionar
          </Button>
        </>
      ) : null}
    </Stack>
  );
};
