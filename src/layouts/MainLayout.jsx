import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSidebar from "../components/layoutComponents/LeftSidebar";
import RightSidebar from "../components/layoutComponents/RightSidebar";
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
                {/* left side bar */}
                <aside className="col-span-3">
                    <LeftSidebar/>
                </aside>

                {/* main section body */}
                <section className="col-span-6" >
                    <Outlet/>


                </section>

                {/* right side bar */}
                <aside className="col-span-3">
                    <RightSidebar/>
                </aside>

            </main>


        </div>
    );
};

export default MainLayout;