import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from './components/product/product';
import { products } from './mocks/products';

import {
  actionAddProductToCart,
  actionRemoveProductFromCart,
  getProductsFromCart,
} from './store/cart';
import DataClientFormRedux from './components/dataClientForm/DataClientForm';
import { SectionTitle } from './components/SectionTitle/SectionTitle';

function App() {
  const productsInCart = useSelector((state) => getProductsFromCart(state.cart));
  const dispatch = useDispatch();

  const handleAddToCart = (id, price) => {
    dispatch(actionAddProductToCart(id, price));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(actionRemoveProductFromCart(id));
  };

  return (
    <>
      <Box maxWidth={1140} marginX="auto" px={{ xs: 1 }} py={{ md: 3, lg: 7 }}>
        <SectionTitle title="Produtos" marginBottom={5} />
        <Grid container spacing={2}>
          {products.map((product) => {
            const foundProduct = productsInCart.find((p) => p.id === product.id);
            const quantity = foundProduct ? foundProduct.quantity : 0;
            return (
              <Grid key={product.id} size={{ xs: 12, md: 4, lg: 3 }}>
                <Product
                  data={product}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                  quantity={quantity}
                />
              </Grid>
            );
          })}
          <DataClientFormRedux />
        </Grid>
      </Box>
    </>
  );
}

export default App;
