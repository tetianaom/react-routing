import { ProductList } from 'components/ProductList';
import { getProducts } from '../fakeAPI';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export const Products = () => {
  const [searchParams] = useSearchParams();
  // const name = searchParams.get('name');
  // const color = searchParams.get('color');
  // const maxPrice = searchParams.get('maxPrice');

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { name, maxPrice, inStock } = params;

  const products = getProducts();
  return (
    <main>
      <h1>Products page</h1>
      <ProductList products={products} />

      <div>
        <p>Name: {name}</p>
        <p>Color: {inStock}</p>
        <p>Maximum price: {maxPrice}</p>
      </div>
    </main>
  );
};
