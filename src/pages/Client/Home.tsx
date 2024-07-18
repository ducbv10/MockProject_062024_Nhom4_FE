import UpcomingAuctions from "@/components/UpcomingAuctions";
import Banner from "../../components/Banner";
import UserNavbar from "../../components/Navbar";
import Footer from "../../layouts/Client/FooterClient";
import SuccessAuctionedProducts from "@/components/SuccessAuctionedProducts";
import Header from "@/layouts/Client/HeaderClient";
import AuctionedProducts from "@/components/HomePage/AuctionedProducts";
import CurrentAuctionPro from "@/components/HomePage/CurrentAuctionPro";
import DetailAuctionOnline from "./DetailAuctionOnline";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="my-4">
        <UserNavbar />
      </div>
      {/* <Banner />
      <div className="m-12">
        <AuctionedProducts />
      </div>
      <div className="m-4">
        <UpcomingAuctions />
      </div>

      <div className="m-12">
        <CurrentAuctionPro />
      </div>

      <div className="mt-4">
        <SuccessAuctionedProducts />
      </div> */}
      <div className="mx-14">
      <DetailAuctionOnline/>
      </div>
      <Footer />
    </div>
  )
}

export default Home;


