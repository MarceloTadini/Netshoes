import React from "react";
import * as S from "./styles";
import Favorite from "../../svg/Heart";
import Rate from "../Rate";

interface CardProps {
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <S.Container>
      <S.CardHeader>
        <img src={imageUrl} alt="" />
        <S.SvgContainer><Favorite/></S.SvgContainer>
      </S.CardHeader>
      <S.CardContent>
        <S.CardTitleBox><S.CardTitle>{title}</S.CardTitle></S.CardTitleBox>
        <Rate/>
        <S.OldPrice>R$299,90</S.OldPrice>
        <S.NewPrice>R$149,90</S.NewPrice>
      </S.CardContent>
    </S.Container>
  );
};

export default Card;
