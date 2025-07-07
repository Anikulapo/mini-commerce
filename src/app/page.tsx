import Shop from "@/content/Shop";
import TopRated from "@/content/TopRated";
import OnSale from "@/content/OnSale";
import Browse from "@/content/Browse";
import Reviews from "@/content/Reviews";


export default function Home() {
  return (
   <div>
      <Shop/>

      <OnSale/>

      <TopRated></TopRated>

      <Browse></Browse>

      <Reviews></Reviews>
   </div>
  );
}
