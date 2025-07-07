"use client";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useProduct } from "@/store/productStore";
import { useCategory } from "@/store/category";
import { Product } from "@/types/Product";
import ClothCard from "@/components/ClothCard";
import Link from "next/link";
import { HashLoader } from "react-spinners";
import { useProducts } from "@/hooks/useProducts";


const Catalogue = () => {
    const {isLoading} = useProducts()
  const [items, setItems] = useState<Product[]>([]);
  const { products } = useProduct();
  const { category, setCategory } = useCategory();

  useEffect(() => {
    console.log(products)
    if (category === "all") {
      setItems(products);
    } else if (category === "Men" || category === "Women") {
      const filtered = products.filter((prod: Product) => prod.gender === category);
      setItems(filtered);
    } 
    else if(category == "Sale"){
        const filtered = products.filter((prod: Product) => prod.newPrice);
      setItems(filtered);
    }
    else{
      const filtered = products.filter((prod: Product) => prod.category === category);
      setItems(filtered);
    }
  }, [category, products]);

  const handleClick = ( )=>{
    setCategory("Sale")
  }

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

  return (
    <div className="bg-white text-black px-[5%] pt-[7%] md:pt-[5%] lg:pt-[5%]">
      <div className="max-w-7xl py-4">
        <nav className="flex items-center space-x-2 text-gray-500">
          <span className="hover:text-black cursor-pointer"><Link href={"/"}>Home</Link></span>
          <ChevronRight className="w-4 h-4" />
          <Link
          onClick={handleClick}
          href={"/catalogue"}><span className="hover:text-black cursor-pointer">Shop</span></Link>
        </nav>
      </div>

      <h1 className="text-black font-bold text-4xl md:text-6xl pb-10 capitalize">{category}</h1>

      <div className="flex flex-wrap gap-7 md:justify-between w-full pb-20">
        {items.map((item) => (
          <ClothCard key={item.id} good={item} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
