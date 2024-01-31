import React from 'react';
import Indicator from '../../components/Indicator';
import { Separator } from '../../components/Separator/styles';

const WishList: React.FC = () => {
  return (
    <div>
      <Indicator page="Home" subPage="Wishlist" isWishList />
      <Separator/>
    </div>
  );
};

export default WishList;
