import UpcomingAuctions from "@/components/UpcomingAuctions";
import Banner from "../../components/Banner";
import UserNavbar from "../../components/Navbar";
import Footer from "../../layouts/Client/FooterClient";
import Header from "@/layouts/Client/HeaderClient";
import CarouselPros from "@/components/HomePage/CarouselPros";
import AuctionedProducts from "@/components/HomePage/AuctionedProducts";
import CurrentAuctionPro from "@/components/HomePage/CurrentAuctionPro";

const Home = () => {



    return (
        <div>
            <Header/>
            <UserNavbar />
            <Banner />
            <div className="m-4">
                <UpcomingAuctions />
            </div>

            <div className="m-12">
                <AuctionedProducts/>
            </div>

            <div className="m-12">
                <CurrentAuctionPro/>
            </div>

            <Footer />
        </div>
    )
}

export default Home;


