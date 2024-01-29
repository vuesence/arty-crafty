interface Product {
  id: number
  title: string
  summary?: any
  data?: any
}
interface ProductCategory {
  id: number
  title: string
  data?: any
}

interface CartItem {
  id: number
  product: Product
  amount: number
}
