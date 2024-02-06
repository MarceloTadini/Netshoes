import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'


interface IndicatorProps {
  page: string
  subPage?: string
  $isWishList?: boolean 
}

const Indicator: React.FC<IndicatorProps> = ({ page, subPage, $isWishList }) => {
  return (
    <div>
      <S.Page $isWishList={$isWishList}>
        <Link to="/">
          {page} 
        </Link>
        <Link to="/wishlist">{subPage && 
          <S.SubPage>/{subPage}</S.SubPage>} </Link>
      </S.Page>
    </div>
  )
}

export default Indicator
