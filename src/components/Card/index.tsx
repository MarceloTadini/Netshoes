import React, { useState, useEffect } from "react"
import * as S from "./styles"
import Rate from "../Rate"
import Favorite from "../../svg/Heart"
import Delete from "../../svg/Delete"

import { CardProps } from "../../types"

const Card: React.FC<CardProps> = ({
  product,
  onAction,
  $isInWishlist,
}) => {
  const [isSvgSelected, setIsSvgSelected] = useState<boolean>(() => {
    const savedState = localStorage.getItem(`isSvgSelected_${product.selectedProduct}`)
    return savedState ? JSON.parse(savedState) : false
  });

  const handleOnClick = () => {
    setIsSvgSelected((prev: boolean) => !prev)
    onAction(product)
  };

  useEffect(() => {
    localStorage.setItem(`isSvgSelected_${product.selectedProduct}`, JSON.stringify(isSvgSelected))
  }, [product.selectedProduct, isSvgSelected])

  return (
    <S.Container>
      <S.CardHeader>
        <img src={product.product.image} alt="" />
        <S.SvgContainer
          onClick={handleOnClick}
          $isInWishlist={$isInWishlist}
          $isSelected={isSvgSelected}
        >
          {$isInWishlist ? <Delete/> : <Favorite/>}
        </S.SvgContainer>
      </S.CardHeader>
      <S.CardContent>
        <S.CardTitleBox>
          <S.CardTitle>{product.name}</S.CardTitle>
        </S.CardTitleBox>
        <Rate />
        <S.OldPrice>R$299,90</S.OldPrice>
        <S.NewPrice>R$149,90</S.NewPrice>
      </S.CardContent>
    </S.Container>
  )
}

export default Card
