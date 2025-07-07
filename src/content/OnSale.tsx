import ClothCard from "@/components/ClothCard";

const items = [
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

const OnSale = () => {
  return (
    <section className="pt-[10%] bg-white px-[5%] flex flex-col items-center">
      <h1 className="text-black text-center font-bold text-6xl pb-10">
        On Sale
      </h1>

      <div className="flex flex-wrap justify-between gap-5">
        {items.map((item) => (
          <ClothCard key={item.id} product={item} />
        ))}
      </div>

      <button
        className="text-black bg-white border border-[rgba(0,0,0,.1)] rounded-full
                                mt-10 mb-15
                                 md:py-2 md:px-7 
                                 lg:py-3 lg:px-10
                                 xl:py-3 xl:px-20 "
      >
        View All
      </button>
    </section>
  );
};

export default OnSale;
