import React, { useState } from 'react'
import Heart from '../../svg/Heart'
import User from '../../svg/User'

import * as S from './styles'
import { Link } from 'react-router-dom'

const links = [
  {
    description: 'Wishlist',
    icon: <Heart />,
    path: '/wishlist'
  }
]

const userMenuOptions = [
  { label: 'Entrar', path: '/' },
  { label: 'Minha Conta', path: '/' },
  { label: 'Endereços', path: '/' },
  { label: 'Minha Netshoes', path: '/' }
]

const Header: React.FC = () => {

  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Logo>
          <Link to="/">NETSHOES</Link>
        </S.Logo>
          <S.LinksContainer>
            {links.length > 0
              ? links.map((link) => {
                  return (
                    <Link to={link.path} key={link.description}>
                      <div>
                        {link.icon}
                        <p>{link.description}</p>
                      </div>
                    </Link>
                  )
                })
              : null}
          <S.UserMenuItem onClick={toggleUserMenu}>
            <User />
            {userMenuOpen && (
              <S.UserMenu>
                {userMenuOptions.map(option => (
                  <Link to={option.path} key={option.label}>
                    <S.MenuItem>
                      <p>{option.label}</p>
                    </S.MenuItem>
                  </Link>
                ))}
              </S.UserMenu>
            )}
          </S.UserMenuItem>

          </S.LinksContainer>
      </S.Header>
    </S.Container>
  )
}

export default Header