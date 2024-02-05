import React, { useEffect, useState } from 'react';
import Indicator from '../../components/Indicator';
import { Separator } from '../../components/Separator/styles';
import { MainWrapper } from '../../components/Wrapper/styles';
import Card from '../../components/Card'; // Importe o componente Card aqui
import Delete from '../../svg/Delete';
import { Loader } from '../../components/Loader/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface WishlistItem {
  name: string;
  product: {
    image: string;
  };
}

const WishList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    // Carregar a lista de desejos ao montar o componente
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    const items: WishlistItem[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistItems(items);
    setLoading(false); // Indicar que os itens da lista de desejos foram carregados
  };

  const handleRemoveFromWishlist = (item: WishlistItem) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const updatedWishlist = wishlist.filter((wishlistItem: WishlistItem) => wishlistItem.name !== item.name);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.success('Produto removido da lista de desejos!');
    console.log('Removed from wishlist:', item);
    
    // Recarregar a lista de desejos após a remoção bem-sucedida
    loadWishlist();
  };

  useEffect(() => {
    // Verificar se a lista de desejos está vazia e exibir o toast informativo
    if (!loading && wishlistItems.length === 0) {
      toast.info('Sua lista de desejos está vazia.');
    }
  }, [wishlistItems, loading]);

  return (
    <div>
      <Indicator page="Home" subPage="Wishlist" isWishList />
      <Separator/>
      {loading ? ( // Exibir o Loader enquanto os itens da lista de desejos estão sendo carregados
        <Loader />
      ) : (
        <MainWrapper>
          {wishlistItems.map((item: WishlistItem, index: number) => (
            <Card
              key={index}
              imageUrl={item.product.image}
              title={item.name}
              SvgIcon={<Delete />} // Você precisa importar o ícone Favorito aqui, se não estiver já importado
              onAction={() => handleRemoveFromWishlist(item)} // Passando a função corretamente
              isInWishlist
            />
          ))}
        </MainWrapper>
      )}
    </div>
  );
};

export default WishList;
