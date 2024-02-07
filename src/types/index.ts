export interface CardProps {
    id: string 
    imageUrl: string
    title: string
    SvgIcon: React.ReactNode
    onAction: () => void
    $isInWishlist?: boolean
    $isSelected: boolean
} 

export interface IndicatorProps {
    title: string
    url: string 
}

export interface Product {
    selectedProduct: string;
    name: string;
    product: {
      image: string;
    };
}