import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { ProductContent } from './ProductContent';

export function Product({ data, onAddToCart, onRemoveFromCart, quantity = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { image, title } = data;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Stack
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ boxShadow: isHovered ? 2 : 0 }}
      borderRadius={2}
      gap={2}
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Box component="img" src={image} sx={{ width: '100%', height: 'auto' }} alt={title}></Box>
      <Box minHeight={155} width="100%">
        <ProductContent
          {...data}
          showCounter={isHovered}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          quantity={quantity}
        />
      </Box>
    </Stack>
  );
}
