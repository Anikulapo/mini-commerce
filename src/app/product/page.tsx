import Product from "@/content/Product";

const ProductPage : React.FC = ()  => {
  return (
    <div className="bg-white  min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Product />
      </div>
    </div>
  );
}

export default ProductPage;