'use client';

import { useProduct } from '@/store/productStore'
import { useProducts } from '@/hooks/useProducts'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'
import { Product } from '@/types/Product'
import Shop from '@/content/Shop'
import OnSale from '@/content/OnSale'
import TopRated from '@/content/TopRated'
import Browse from '@/content/Browse'
import Reviews from '@/content/Reviews'

export default function Home() {
  
  const { data, isLoading, error } = useProducts()
  const { setProducts } = useProduct()

  const [sale, setSale] = useState<Product[]>([])
  const [rated, setRated] = useState<Product[]>([])

  useEffect(() => {
    if (data) {
      setProducts(data)


      const onSaleProducts = data
        .filter((product : Product) => product.newPrice != null)
        .slice(0, 4)
      setSale(onSaleProducts)

      const topRated = data
        .filter((product : Product) => product.rating > 4)
        .slice(0, 4)
      setRated(topRated)
    }

    
  }, [data, setProducts])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <HashLoader
          color="#000000"
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <h1 className="text-xl text-gray-700">Error loading products. Please reload.</h1>
      </div>
    )
  }

  return (
    <div>
      <Shop />
      <OnSale items={sale} />
      <TopRated items={rated} />
      <Browse />
      <Reviews />
    </div>
  )
}
