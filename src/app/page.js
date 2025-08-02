import Carousel from "@/components/home/Carousel/Carousel";
import FlashSalesSlider from "@/components/home/FlashSales/FlashSalesSlider";
import ScrollingBanner from "@/components/home/ScrollingBanner/ScrollingBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <ScrollingBanner/>
      <FlashSalesSlider/>
    </div>
  );
}
