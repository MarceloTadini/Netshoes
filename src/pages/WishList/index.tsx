import React, { useEffect, useState } from 'react'
import Indicator from '../../components/Indicator'
import { Separator } from '../../components/Separator/styles'
import { MainWrapper } from '../../components/Wrapper/styles'
import Card from '../../components/Card' 
import Delete from '../../svg/Delete'
import { Loader } from '../../components/Loader/styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface WishlistItem {
  name: string
  product: {
    image: string
  };
  selectedProduct: string
}

const WishList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    loadWishlist();
  }, [loading]);

  const loadWishlist = () => {
    const items: WishlistItem[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistItems(items);
    setLoading(false);
  }

  const handleRemoveFromWishlist = (item: WishlistItem) => {
    const updatedWishlist = wishlistItems.filter((wishlistItem: WishlistItem) => wishlistItem.selectedProduct !== item.selectedProduct);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.success('Produto removido da lista de desejos!');

    // Atualizar o estado do SVG correspondente
    localStorage.setItem(`isSvgSelected_${item.selectedProduct}`, JSON.stringify(false));

    setWishlistItems(updatedWishlist);
  }

  return (
    <div>
      <Indicator page="Home" subPage="Wishlist" isWishList />
      <Separator/>
      {loading ? (
        <Loader />
      ) : (
        <MainWrapper>
          {wishlistItems.map((item: WishlistItem) => (
            <Card
              key={item.selectedProduct}
              id={item.selectedProduct}
              imageUrl={item.product.image}
              title={item.name}
              SvgIcon={<Delete />}
              onAction={() => handleRemoveFromWishlist(item)}
              isInWishlist
            />
          ))}
        </MainWrapper>
      )}
    </div>
  )
}


export default WishList
