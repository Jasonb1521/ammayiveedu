import BranchShowcase from "@/components/sections/BranchShowcase";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import StorySection from "@/components/sections/StorySection";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <BranchShowcase />
      <FeaturedDishes />
      <StorySection />
      <Testimonials />
    </>
  );
}