import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Wrapper } from './components/Wrapper/styles'
import Header from './components/Header'
import Home from './pages/Home'
import WishList from './pages/WishList'
import Indicator from './components/Indicator'

const pathMap = {
  home: 'Home',
  wishlist: 'Wishlist'
}

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Indicator pathMap={pathMap}></Indicator>
        <Outlet />
      </Wrapper>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      },
      { path: '/wishlist', element: <WishList /> }
    ]
  }
])