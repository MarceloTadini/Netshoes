import React, { useState, useEffect } from "react"
import * as S from "./styles"
import Rate from "../Rate"

interface CardProps {
  id: string // Adicione a propriedade id
  imageUrl: string
  title: string
  SvgIcon: React.ReactNode
  onAction: () => void
  isInWishlist?: boolean
}

const Card: React.FC<CardProps> = ({
  id, // Receba o id como propriedade
  imageUrl,
  title,
  SvgIcon,
  onAction,
  isInWishlist,
}) => {
  const [isSvgSelected, setIsSvgSelected] = useState(() => {
    // Verifique se há um estado salvo no localStorage ao inicializar o componente
    const savedState = localStorage.getItem(`isSvgSelected_${id}`) // Use o id na chave
    return savedState ? JSON.parse(savedState) : false
  })

  useEffect(() => {
    // Salve o estado no localStorage sempre que ele mudar
    localStorage.setItem(`isSvgSelected_${id}`, JSON.stringify(isSvgSelected)) // Use o id na chave
  }, [id, isSvgSelected])

  const handleOnClick = () => {
    setIsSvgSelected((prev: boolean) => !prev) // Alternar o estado do SVG selecionado
    onAction() // Chamada da função para lidar com a ação do clique
  }

  return (
    <S.Container>
      <S.CardHeader>
        <img src={imageUrl} alt="" />
        <S.SvgContainer
          onClick={handleOnClick}
          isInWishlist={isInWishlist}
          isSelected={isSvgSelected} // Passar o estado do SVG selecionado para o estilo
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
