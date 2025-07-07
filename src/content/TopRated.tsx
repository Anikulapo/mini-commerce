import ClothCard from "@/components/ClothCard";

import { Product } from "@/types/Product";



type Prop ={
  items : Product[]
}

const baseButtonClass =
  "text-black bg-white border border-[rgba(0,0,0,.1)] rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-md/50 hover:cursor-pointer";

const TopRated: React.FC<Prop> = ({items}) => {
  return (
    <section className="pt-[5%] bg-white px-[5%] flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-black text-center font-bold text-4xl md:text-6xl pb-10">
          Top Rated
        </h1>

        <div className="flex flex-wrap  gap-7 md:justify-between w-full">
          {items.map((item) => (
            <ClothCard key={item.id} good={item} />
          ))}
        </div>

        {/* Desktop Button */}
        <button
          className={`${baseButtonClass} hidden md:block py-2 px-10 mt-10 mb-15 md:py-3 md:px-15 lg:py-3 lg:px-10 xl:py-3 xl:px-20 hover:bg-black hover:text-white`}
        >
          View All
        </button>

        {/* Mobile Button */}
        <button
          className={`text-black bg-white border border-[rgba(0,0,0,.1)] rounded-full md:hidden w-full py-2 px-10 mt-10 mb-15`}
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default TopRated;
