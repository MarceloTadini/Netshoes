import React from 'react';
import Indicator from '../../components/Indicator';
import { Separator } from '../../components/Separator/styles';
import { MainWrapper } from '../../components/Wrapper/styles';

const WishList: React.FC = () => {
  return (
    <div>
      <Indicator page="Home" subPage="Wishlist" isWishList />
      <Separator/>
      <MainWrapper>
        
      </MainWrapper>
    </div>
  );
};

export default WishList;
