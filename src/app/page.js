import BestDeal from "@/components/home/BestDeal/BestDeal";
import Carousel from "@/components/home/Carousel/Carousel";
import ProductCard from "@/components/home/FashionTrend/ProductCard";
import FeaturesSection from "@/components/home/FeaturesSection/FeaturesSection";


import FlashSalesSlider from "@/components/home/FlashSales/FlashSalesSlider";
import NewArrival from "@/components/home/NewArrival/NewArrival";
import ScrollingBanner from "@/components/home/ScrollingBanner/ScrollingBanner";


export default function Home() {

  
  return (
    <div className="">
      <Carousel />
      <ScrollingBanner/>
      <FlashSalesSlider/>
      <ProductCard/>
      <NewArrival/>
      <BestDeal/>
      <FeaturesSection/>
      
    </div>
  );
}
