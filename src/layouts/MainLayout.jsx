import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSidebar from "../components/layoutComponents/LeftSidebar";
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
            <nav className="w-11/12 my-2 mx-auto">
                <Navbar/>
            </nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 mt-16">
                <aside className="col-span-3">
                    <LeftSidebar/>
                </aside>
                <section className="col-span-6" >main</section>
                <aside className="col-span-3">right</aside>

            </main>


        </div>
    );
};

export default MainLayout;