import React, { useEffect, useState } from 'react';
import { Separator } from '../../components/Separator/styles';
import { MainWrapper } from '../../components/Wrapper/styles';
import Card from '../../components/Card';
import Delete from '../../svg/Delete';
import { Loader } from '../../components/Loader/styles';
import { Product } from '../../types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound } from '../../components/NotFound/styles';

const WishList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    loadWishlist();
  }, [loading]);

  const loadWishlist = () => {
    const items: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistItems(items);
    setLoading(false);
  }

  const handleRemoveFromWishlist = (product: Product) => {
    const updatedWishlist = wishlistItems.filter((wishlistItem: Product) => wishlistItem.selectedProduct !== product.selectedProduct);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.success('Produto removido da lista de desejos!');
    console.log('Removed from wishlist:', product)

    // Atualizar o estado do SVG correspondente
    localStorage.setItem(`isSvgSelected_${product.selectedProduct}`, JSON.stringify(false));

    setWishlistItems(updatedWishlist);
  }

  return (
    <div>
      <Separator />
      {loading ? (
        <Loader />
      ) : (
        wishlistItems.length === 0 ? (
          <NotFound>
            Você não adicionou nenhum produto na sua lista de desejos
          </NotFound>
        ) : (
          <MainWrapper>
            {wishlistItems.map((product: Product) => (
              <Card
                key={product.selectedProduct}
                id={product.selectedProduct}
                imageUrl={product.product.image}
                title={product.name}
                SvgIcon={<Delete />}
                onAction={() => handleRemoveFromWishlist(product)}
                $isInWishlist
                $isSelected
              />
            ))}
          </MainWrapper>
        )
      )}
    </div>
  );
}

export default WishList;
