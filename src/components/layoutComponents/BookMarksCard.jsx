import { useEffect, useState } from "react";
import Navbar from "../Navbar";


const BookMarksCard = () => {
    const [localData, setLocalData] = useState([])

    useEffect(() => {
        const bookMarksString = localStorage.getItem("myBookmarks")

        const bookMarks = JSON.parse(bookMarksString)
        setLocalData(bookMarks)
    }, [])



// title, author, rating, total_view, thumbnail_url, details, _id


    return (
        <div>

            <Navbar/>

            {
                localData.map(news => <div key={news._id} className="flex justify-center my-5 ">
                    <div className="max-w-lg p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
                        <img src={news?.thumbnail_url} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                        <div className="mt-6 mb-2">
                           
                            <h2 className="text-xl font-semibold tracking-wide">{news?.title }</h2>
                        </div>
                        <p className="text-gray-800">{ news.details}</p>
                    </div>

                </div>)
            }
        </div>
    );
};

export default BookMarksCard;