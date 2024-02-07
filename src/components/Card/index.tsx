import React, { useState, useEffect } from "react"
import * as S from "./styles"
import Rate from "../Rate"

import { CardProps } from "../../types"

const Card: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  SvgIcon,
  onAction,
  $isInWishlist,
}) => {
  const [isSvgSelected, setIsSvgSelected] = useState<boolean>(() => {
    const savedState = localStorage.getItem(`isSvgSelected_${id}`)
    return savedState ? JSON.parse(savedState) : false
  });

  const handleOnClick = () => {
    setIsSvgSelected((prev: boolean) => !prev)
    onAction()
  };

  useEffect(() => {
    localStorage.setItem(`isSvgSelected_${id}`, JSON.stringify(isSvgSelected))
  }, [id, isSvgSelected])

  return (
    <S.Container>
      <S.CardHeader>
        <img src={imageUrl} alt="" />
        <S.SvgContainer
          onClick={handleOnClick}
          $isInWishlist={$isInWishlist}
          $isSelected={isSvgSelected}
        >
          {SvgIcon}
        </S.SvgContainer>
      </S.CardHeader>
      <S.CardContent>
        <S.CardTitleBox>
          <S.CardTitle>{title}</S.CardTitle>
        </S.CardTitleBox>
        <Rate />
        <S.OldPrice>R$299,90</S.OldPrice>
        <S.NewPrice>R$149,90</S.NewPrice>
      </S.CardContent>
    </S.Container>
  )
}

export default Card
