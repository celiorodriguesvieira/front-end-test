import { Box, Button, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { TotalPrice } from '../components/TotalPrice/TotalPrice';
import purchaseImage from '../assets/images/purchase.png';

export function Success() {
  const clientName = 'Celio';

  return (
    <Box maxWidth={1140} marginX="auto" px={{ xs: 2 }} py={{ xs: 6, lg: 10 }}>
      <Stack>
        <Typography>John Doe,</Typography>
        <Typography>Sua compra no valor {} foi finalizada com sucesso.</Typography>
        <Box component="img" width={238} height={195} src={purchaseImage} />
        <Button component={RouterLink} to="/" sx={210}></Button>
      </Stack>
    </Box>
  );
}
