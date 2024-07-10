import UpcomingAuctions from "@/components/UpcomingAuctions";
import Banner from "../../components/Banner";
import UserNavbar from "../../components/Navbar";
import Footer from "../../layouts/Client/FooterClient";
import SuccessAuctionedProducts from "@/components/SuccessAuctionedProducts";
import Header from "@/layouts/Client/HeaderClient";

const Home = () => {
    return (
        <div>
            <Header/>
            <UserNavbar />
            <Banner />
            <div className="m-4">
                <UpcomingAuctions />
            </div>
            <div className="mt-4">
                <SuccessAuctionedProducts />
            </div>
            <Footer />
        </div>
    )
}

export default Home;