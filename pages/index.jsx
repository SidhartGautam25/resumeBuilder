import Topbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import Home from "@/app/components/home/Home";
import Fcomp from "@/app/components/fcomp/Fcomp";
import Slider from "@/app/components/slider/Slider";
import Why from "@/app/components/why/Why";
export default function Index() {
  return (
    <>
      <Topbar />
      <Home />
      <Fcomp />
      <Why />
      <Slider />
      <Footer />
    </>
  );
}
