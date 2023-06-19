import { ProductList } from 'components/ProductList';
import { getProducts } from '../fakeAPI';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <h1>Products page</h1>
      <ProductList products={products} />
    </main>
  );
};
