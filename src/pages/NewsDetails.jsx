import { Link, useParams } from "react-router";
import Header from "../components/Header";
import RightSidebar from "../components/layoutComponents/RightSidebar";
import { useEffect, useState } from "react";
import { FaBackward } from "react-icons/fa";


const NewsDetails = () => {

    const { id } = useParams()

    const [newsDetails, setNewsDetails] = useState()

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/${id}`)

            .then(res => res.json())
            .then(data => setNewsDetails(data?.data[0])

            )

        setLoading(false)
    }, [id])

    if (loading) {
        return <h1>Loading.......</h1>
    }

    return (
        <div>
            <div>
                <Header />
            </div>

            <main className="md:grid md:grid-cols-12 w-11/12 mx-auto mt-10">
                <section className="col-span-9 w-11/12 mx-auto">

                    <h1 className="font-bold mx-2 ml-3">Daily Feed</h1>

                    <div className=" mx-auto p-4 shadow-md bg-gray-50 text-gray-800">



                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src={newsDetails?.thumbnail_url} alt="Thumbnail" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />

                            </div>
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold text-default-600">{newsDetails?.title}</h3>
                                </a>
                                <p className="leading-snug text-gray-600">L{newsDetails?.details}</p>
                            </div>
                        </div>

                        <div className=" w-full my-4">
                            <Link to="/" className="btn bg-blue-600 text-base-300 "> <FaBackward/> Back To Home Page</Link>
                        </div>
                    </div>

                </section>
                <aside className="col-span-3">

                    <RightSidebar />

                </aside>
            </main>


        </div>
    );
};

export default NewsDetails;