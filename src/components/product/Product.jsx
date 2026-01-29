import { Stack, Box } from '@mui/material';
import { ProductContent } from './ProductContent';
import { useState } from 'react';

export function Product({ data, onAddToCart }) {
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
      alignItems="center"
      borderRadius={2}
      gap={2}
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Box component="img" src={image} sx={{ width: '100%', height: 'auto' }} alt={title}></Box>
      <Box minHeight={155} width="100%">
        <ProductContent {...data} showCounter={isHovered} onAddToCart={onAddToCart} />
      </Box>
    </Stack>
  );
}
