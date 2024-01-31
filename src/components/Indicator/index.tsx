import React from 'react';
import * as S from './styles';

interface IndicatorProps {
  page: string;
  subPage?: string;
  isWishList?: boolean; // Nova propriedade para indicar se é WishList
}

const Indicator: React.FC<IndicatorProps> = ({ page, subPage, isWishList }) => {
  return (
    <div>
      <S.Page isWishList={isWishList}>{page} {subPage && <S.SubPage>/ {subPage}</S.SubPage>}</S.Page>
    </div>
  );
};

export default Indicator;
