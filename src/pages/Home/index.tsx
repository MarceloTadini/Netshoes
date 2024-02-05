import React, { useEffect, useState } from 'react';
import Indicator from '../../components/Indicator';
import { Separator } from '../../components/Separator/styles';
import Card from '../../components/Card';
import { MainWrapper } from '../../components/Wrapper/styles';
import Favorite from "../../svg/Heart";
import { Loader } from '../../components/Loader/styles'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
  selectedProduct: string;
  name: string;
  product: {
    image: string;
  };
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/5ab15ba4-fe75-4a4f-b54c-7efa540e3e3d')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false); // Indicar que os produtos foram carregados
      })
      .catch(error => {
        console.error('Erro ao carregar os produtos:', error);
        setLoading(false); // Indicar que houve um erro ao carregar os produtos
        toast.error('Erro ao carregar os produtos. Tente novamente mais tarde.');
      });
  }, []);

  const handleToggleWishlist = (product: Product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const isProductInWishlist = wishlist.some((item: Product) => item.selectedProduct === product.selectedProduct);

    if (!isProductInWishlist) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      toast.success('Produto adicionado à lista de desejos!');
      console.log('Added to wishlist:', product);
    } else {
      const updatedWishlist = wishlist.filter((item: Product) => item.selectedProduct !== product.selectedProduct);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      toast.success('Produto removido da lista de desejos!');
      console.log('Removed from wishlist:', product);
    }
  };

  return (
    <div>
      <Indicator page="Home"/>
      <Separator/>
      {loading ? ( // Exibir o Loader se os produtos estiverem carregando
        <Loader />
      ) : (
        <MainWrapper>
          {products.map(product => (
            <Card
              key={product.selectedProduct}
              imageUrl={product.product.image}
              title={product.name}
              SvgIcon={<Favorite />} 
              onAction={() => handleToggleWishlist(product)}
            />
          ))}
        </MainWrapper>
      )}
    </div>
  );
};

export default Home;
