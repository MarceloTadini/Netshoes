import React, { useEffect, useState } from 'react';
import Indicator from '../../components/Indicator';
import { Separator } from '../../components/Separator/styles';
import Card from '../../components/Card';
import { MainWrapper } from '../../components/Wrapper/styles';

interface Product {
  selectedProduct: string;
  name: string;
  product: {
    image: string;
  };
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/5ab15ba4-fe75-4a4f-b54c-7efa540e3e3d')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div>
      <Indicator page="Home"/>
      <Separator/>
      <MainWrapper>
        {products.map(product => (
          <Card
            key={product.selectedProduct}
            imageUrl={product.product.image}
            title={product.name}
          />
        ))}
      </MainWrapper>
    </div>
  );
};

export default Home;
