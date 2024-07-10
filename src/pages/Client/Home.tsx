import UpcomingAuctions from "@/components/UpcomingAuctions";
import Banner from "../../components/Banner";
import UserNavbar from "../../components/Navbar";
import Footer from "../../layouts/Client/FooterClient";

const Home = () => {
    return (
        <div>
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