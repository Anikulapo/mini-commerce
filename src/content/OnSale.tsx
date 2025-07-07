import ClothCard from "@/components/ClothCard";

type Product = {
  id: string;
  title: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  gender: string;
  rating: number;
  newPrice: number;
  oldPrice: number;
  image: string;
  description: string;
};

const items: Product[] = [
  {
    id: "2",
    title: "Classic Fit Hoodie",
    name: "Hoodie",
    slug: "classic-hoodie",
    category: "Formal",
    subcategory: "Layering",
    gender: "Men",
    rating: 4.7,
    newPrice: 39.99,
    oldPrice: 54.99,
    image: "/images/blackShirt.png",
    description:
      "This classic fit hoodie provides warmth and comfort with a modern style. Made from soft fleece fabric, it’s great for lounging or layering up outdoors.",
  },
  {
    id: "4",
    title: "Breathable Sports Shorts",
    name: "Sports Shorts",
    slug: "sports-shorts",
    category: "Gym",
    subcategory: "Bottoms",
    gender: "Men",
    rating: 4.0,
    newPrice: 29.99,
    oldPrice: 39.99,
    image: "/images/CheckeredShirt.png",
    description:
      "These breathable shorts are built for performance and comfort. Lightweight and quick-drying, they’re perfect for workouts or casual days out.",
  },
  {
    id: "6",
    title: "Oversized Tee",
    name: "Oversized T-Shirt",
    slug: "oversized-tshirt",
    category: "Casual",
    subcategory: "Tops",
    gender: "Women",
    rating: 4.3,
    newPrice: 22.99,
    oldPrice: 32.99,
    image: "/images/WineShirt.png",
    description:
      "This oversized tee is a staple for laid-back days. Made from ultra-soft cotton, it’s designed to keep you comfortable all day long with effortless style.",
  },
  {
    id: "8",
    title: "Cropped Denim Jacket",
    name: "Denim Jacket",
    slug: "cropped-jacket",
    category: "Parties",
    subcategory: "Outerwear",
    gender: "Women",
    rating: 4.4,
    newPrice: 59.99,
    oldPrice: 79.99,
    image: "/images/BlueJeans.png",
    description:
      "Layer up in this cropped denim jacket that adds a touch of edge to your outfit. It’s perfect for breezy evenings and pairs well with almost anything.",
  },
];

const baseButtonClass =
  "text-black bg-white border border-[rgba(0,0,0,.1)] rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-md/50 hover:cursor-pointer";

const OnSale: React.FC = () => {
  return (
    <section className="pt-[10%] bg-white px-[5%] flex flex-col items-center">
      <div className="w-full flex flex-col items-center border-b border-[rgba(0,0,0,.1)]">
        <h1 className="text-black text-center font-bold text-4xl md:text-6xl pb-10">
          On Sale
        </h1>

        <div className="flex flex-wrap gap-7 md:justify-between w-full">
          {items.map((item) => (
            <ClothCard key={item.id} product={item} />
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

export default OnSale;
