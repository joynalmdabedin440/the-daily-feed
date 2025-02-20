import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NewsCard from "../components/NewsCard";


const Main = () => {
    const { id } = useParams()

    const [news, setNews] = useState([])


    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
            .then(res => res.json())
            .then(data => setNews(data.data)
            )


    }, [id])


    return (
        <div>
            <h2>The Daily News Home({news.length})</h2>

            <div className="m-2 space-y-2">
                {
                    news.map(singleNews => <NewsCard singleNews={singleNews} key={singleNews._id} />)
                }
            </div>


        </div>
    );
};

export default Main;