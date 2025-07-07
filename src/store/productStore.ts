'use client'

import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

type Product = {
  id: string
  title: string
  name: string
  slug: string
  category: string
  subcategory: string
  gender: string
  rating: number
  price?: number
  newPrice?: number
  oldPrice?: number
  image: string[]
  description: string
}

interface ProductState {
  products: Product[]
  setProducts: (products: Product[]) => void
  filterByCategory: (category: string) => Product[]
  filterByGender: (gender: string) => Product[]
}

export const useProductStore = create<ProductState>()(
  subscribeWithSelector((set, get) => ({
    products: [],

    setProducts: (products) => set({ products }),



    filterByCategory: (category) => {
      return get().products.filter((p) => p.category === category)
    },

    filterByGender: (gender) => {
      return get().products.filter((p) => p.gender === gender)
    },

  }))
)

export const useProduct = () => {
    const products = useProductStore((state) => state.products)
    const setProducts = useProductStore((state) => state.setProducts)
    const filterByCategory = useProductStore((state) => state.filterByCategory)
    const filterByGender = useProductStore((state) => state.filterByGender)
    
    return {
        products,
        setProducts,
        filterByCategory,
        filterByGender,
    }
}
