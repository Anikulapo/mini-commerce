import { useQuery } from '@tanstack/react-query'
import { Product } from '@/types/Product'

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('/data/products.json')
      if (!res.ok) throw new Error('Failed to fetch products')
      
      return res.json()
    },
  })
}
