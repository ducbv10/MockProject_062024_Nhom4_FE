import UpcomingAuctions from "@/components/UpcomingAuctions";
import Banner from "../../components/Banner";
import UserNavbar from "../../components/Navbar";
import Footer from "../../layouts/Client/FooterClient";
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
            <Footer />
        </div>
    )
}

export default Home;