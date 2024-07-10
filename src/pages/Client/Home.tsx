import UpcomingAuctions from "@/components/UpcomingAuctions";
import UserNavbar from "../../components/Navbar";
import Footer from "../../layouts/Client/FooterClient";

const Home = () => {
    return (
        <div>
            <h1>Home Hello world</h1>
            <UserNavbar />
            <div className="m-4">
                <UpcomingAuctions />
            </div>
            <Footer />
        </div>
    )
}

export default Home;