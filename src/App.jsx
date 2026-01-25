import { Grid } from '@mui/material';
import { Product } from './components/product/product';
import { products } from './mocks/products';
import { DataClientForm } from './components/dataClientForm/DataClientForm';

function App() {
  return (
    <Grid container maxWidth={1140} marginX="auto" spacing={2} px={{ xs: 1 }}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 12, md: 4, lg: 3 }}>
          <Product data={product} />
        </Grid>
      ))}
      <DataClientForm />
    </Grid>
  );
}

export default App;
