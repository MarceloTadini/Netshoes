import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { useLocation, Link } from 'react-router-dom'
import { IndicatorProps } from '../../types/index'

interface Props {
  pathMap: Record<string, string>
}

const Indicator: React.FC<Props> = ({ pathMap }) => {
  const { pathname } = useLocation()
  const [breadcrumbs, setBreadcrumbs] = useState<IndicatorProps[]>([])

  const handleUrl = () => {
    const paths = pathname.split('/').filter((path) => path !== '')
    const newBreadcrumbs = paths.map((element, index) => ({
      title: pathMap[element],
      url: `/${paths.slice(0, index + 1).join('/')}`
    }))
    setBreadcrumbs([{ title: 'Home', url: '/' }, ...newBreadcrumbs])
  }

  const generateBreadCrumbs = () => {
    const generate = breadcrumbs.map((breadcrumb, index) => {
      const isLast = index === breadcrumbs.length - 1;
      return (
        <div key={breadcrumb.title}>
          {index !== 0 ? <span className="slash"> {'/'} </span> : null}
          <Link to={breadcrumb.url}>
            <span style={{ fontWeight: isLast ? 'bold' : 'normal' }}>{breadcrumb.title}</span>
          </Link>
        </div>
      )
    })
  
    return generate
  }
  

  useEffect(() => {
    handleUrl()
  }, [pathname])

  return (
    <S.Container>
      <S.BreadCrumbContainer>{generateBreadCrumbs()}</S.BreadCrumbContainer>
    </S.Container>
  )
}

export default Indicator