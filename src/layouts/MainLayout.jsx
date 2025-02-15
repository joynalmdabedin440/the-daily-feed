import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div className="font-poppins max-w-7xl mx-auto">
            <header>
                <Header>
                </Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>

            </header>
            <nav className="w-11/12 mt-2 mx-auto">
                <Navbar/>
            </nav>
            <main>
                main

            </main>


        </div>
    );
};

export default MainLayout;