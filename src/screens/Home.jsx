import { Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import DataClientForm from '../components/DataClientForm/DataClientForm';
import { Product } from '../components/product/Product';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { products } from '../mocks/products';
import { actionAddProductToCart } from '../store/cart';

export function Home() {
  const dispatch = useDispatch();

  const handleAddToCart = (id, price, quantityToAdd = 1) => {
    for (let i = 0; i < quantityToAdd; i++) {
      dispatch(actionAddProductToCart(id, price));
    }
  };

  return (
    <Box maxWidth={1140} marginX="auto" px={{ xs: 1 }} py={{ xs: 3, lg: 7 }}>
      <SectionTitle title="Produtos" marginBottom={5} />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, md: 4, lg: 3 }}>
            <Product data={product} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
        <DataClientForm />
      </Grid>
    </Box>
  );
}
