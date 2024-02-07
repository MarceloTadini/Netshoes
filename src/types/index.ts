export interface CardProps {
    product: Product;
    onAction: (product: Product) => void;
    $isInWishlist?: boolean
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
    }
}