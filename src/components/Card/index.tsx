import React, { ReactNode } from "react";
import * as S from "./styles";
import Rate from "../Rate";

interface CardProps {
  imageUrl: string;
  title: string;
  SvgIcon: ReactNode;
  onAction: () => void;
  isInWishlist?: boolean; // Nova propriedade opcional para identificar se o Card está na Wishlist
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  SvgIcon,
  onAction,
  isInWishlist,
}) => {
  const handleOnClick = () => {
    onAction();
  };

  return (
    <S.Container>
      <S.CardHeader>
        <img src={imageUrl} alt="" />
        <S.SvgContainer
          onClick={handleOnClick}
          isInWishlist={isInWishlist}
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
  );
};

export default Card;
