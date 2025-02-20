import Navbar from "./Navbar";


const About = () => {
    return (
        <div >

            <Navbar />

            <div className="w-72 text-center mx-auto mt-50 ">
                <h1 className="text-2xl font-bold">About Us</h1>
                <p>Welcome to The Daily Feed. We provide the latest news and updates from around the world.</p>

            </div>
        </div>
    );
};

export default About;