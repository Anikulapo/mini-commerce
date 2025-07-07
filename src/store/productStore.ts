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
  gender: 'Men' | 'Women'
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
  categories: () => string[]
  subcategories: (category: string) => string[]
  filterByCategory: (category: string) => Product[]
  filterByGender: (gender: string) => Product[]
}

export const useProductStore = create<ProductState>()(
  subscribeWithSelector((set, get) => ({
    products: [],

    setProducts: (products) => set({ products }),


    categories: () => {
      const all = get().products.map((p) => p.category)
      return [...new Set(all)]
    },

    subcategories: (category) => {
      const all = get()
        .products
        .filter((p) => p.category === category)
        .map((p) => p.subcategory)
      return [...new Set(all)]
    },



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
    const categories = useProductStore((state) => state.categories)
    const subcategories = useProductStore((state) => state.subcategories)
    const filterByCategory = useProductStore((state) => state.filterByCategory)
    const filterByGender = useProductStore((state) => state.filterByGender)
    
    return {
        products,
        setProducts,
        categories,
        subcategories,
        filterByCategory,
        filterByGender,
    }
}
