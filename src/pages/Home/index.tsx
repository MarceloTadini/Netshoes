import React from 'react'
import Indicator from '../../components/Indicator'
import { Separator } from '../../components/Separator/styles'
import Card from '../../components/Card'
import { MainWrapper } from '../../components/Wrapper/styles'

const Home: React.FC = () => {
  return (
   <div>
    <Indicator page="Home"/>
    <Separator/>
    <MainWrapper>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </MainWrapper>
   </div>
  )
}

export default Home
