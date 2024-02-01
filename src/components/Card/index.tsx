import React from "react"
import * as S from "./styles"
import tenis from "../../assets/tenis.png"
import Favorite from "../../svg/Heart"
import Rate from "../Rate"

const Card: React.FC = () => {

    return(
        <S.Container>
           <S.CardHeader>
                <img src={tenis} alt="" />
                <S.SvgContainer><Favorite/></S.SvgContainer>
                
           </S.CardHeader>
           <S.CardContent>
                <S.CardTitle>Tênis Adidas Breaknet Masculino</S.CardTitle>
                <Rate/>
                <S.OldPrice>R$299,00</S.OldPrice>
                <S.NewPrice>R$150,00</S.NewPrice>
           </S.CardContent>
        </S.Container>
    )
}

export default Card