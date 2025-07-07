import ClothCard from "@/components/ClothCard";
import { Product } from "@/types/Product";
import Link from "next/link";
import { useCategory } from "@/store/category";



type Prop ={
  items : Product[]
}



const baseButtonClass =
  "text-black bg-white border border-[rgba(0,0,0,.1)] rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-md/50 hover:cursor-pointer";

const OnSale: React.FC<Prop> = ({items}) => {
  const {setCategory} = useCategory()

  const handleClick = ( )=>{
    setCategory("Sale")
  }

  return (
    <section className="pt-[10%] bg-white px-[5%] flex flex-col items-center">
      <div className="w-full flex flex-col items-center border-b border-[rgba(0,0,0,.1)]">
        <h1 className="text-black text-center font-bold text-4xl md:text-6xl pb-10">
          On Sale
        </h1>

        <div className="flex flex-wrap gap-7 md:justify-between w-full">
          {items.map((item) => (
            <ClothCard key={item.id} good={item} />
          ))}
        </div>

        {/* Desktop Button */}
        <Link
        onClick={handleClick}
         href={"/catalogue"}>
          <button
            className={`${baseButtonClass} hidden md:block py-2 px-10 mt-10 mb-15 md:py-3 md:px-15 lg:py-3 lg:px-10 xl:py-3 xl:px-20 hover:bg-black hover:text-white`}
          >
            View All
          </button>
        </Link>

        {/* Mobile Button */}
        <Link 
        onClick={handleClick}
        href={"/catalogue"}>
          <button
            className={`text-black bg-white border border-[rgba(0,0,0,.1)] rounded-full md:hidden w-full py-2 px-10 mt-10 mb-15`}
          >
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OnSale;
