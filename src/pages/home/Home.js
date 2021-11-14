import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Time from "../../components/time/Time";
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Time />
            <Header />
        </div>
    )
}

export default Home