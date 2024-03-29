import React, { useEffect, useState } from 'react'
import { Separator } from '../../components/Separator/styles'
import Card from '../../components/Card'
import { MainWrapper } from '../../components/Wrapper/styles'
import { Loader } from '../../components/Loader/styles'
import { Product } from '../../types'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/5ab15ba4-fe75-4a4f-b54c-7efa540e3e3d')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false) 
      })
      .catch(error => {
        console.error('Erro ao carregar os produtos:', error)
        setLoading(false) 
        toast.error('Erro ao carregar os produtos. Tente novamente mais tarde.')
      })
  }, [])

  const handleToggleWishlist = (product: Product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    const isProductInWishlist = wishlist.some((item: Product) => item.selectedProduct === product.selectedProduct)

    if (!isProductInWishlist) {
      wishlist.push(product)
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      toast.success('Produto adicionado à lista de desejos!')
      console.log('Added to wishlist:', product)
    } else {
      const updatedWishlist = wishlist.filter((item: Product) => item.selectedProduct !== product.selectedProduct)
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
      toast.success('Produto removido da lista de desejos!')
      console.log('Removed from wishlist:', product)
    }
  }

  return (
    <div>
      <Separator/>
      {loading ? ( // Exibir o Loader se os produtos estiverem carregando
        <Loader />
      ) : (
        <MainWrapper>
          {products.map((product :Product) => (
            <Card
              key={product.selectedProduct}
              product={product}
              onAction={() => handleToggleWishlist(product)}
          />
          ))}
        </MainWrapper>
      )}
    </div>
  )
}

export default Home
