import PropTypes from 'prop-types';
import { useState } from "react";
import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const NewsCard = ({singleNews}) => {
  const [showFullText, setShowFullText] = useState(false);

  const { title, author, rating, total_view, thumbnail_url, details } = singleNews
  console.log(author);
  
  
  const { name, published_date, img } = author
  
  console.log(img);
  
 
  /* 
  {
"_id": "0282e0e58a5c404fbd15261f11c2ab6a",
"others_info": {
"is_todays_pick": false,
"is_trending": true
},
"category_id": "01",
"rating": {
"number": 4.5,
"badge": "Excellent"
},
"total_view": 488,
"title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
"author": {
"name": "Jimmy Dane",
"published_date": "2022-08-24 17:27:34",
"img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
},
"thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
"image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
"details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
}
  
  
  
  */
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200 p-4 relative">
      <div className="absolute top-4 right-4 flex gap-3">
        <FaShareAlt className="text-gray-500 cursor-pointer hover:text-gray-700" />
        <FaBookmark className="text-gray-500 cursor-pointer hover:text-gray-700" />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <img
          src={img}
          alt="Author"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-md font-bold">{name }</h3>
          <p className="text-sm text-gray-500">{ published_date}</p>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">
        {title}
      </h2>
      <img
        src={thumbnail_url}
        alt="News Thumbnail"
        className="w-full md:h-56  lg:h-80  rounded-lg"
      />
       <p className="text-sm text-gray-600 mt-2">
        {showFullText ? details : `${details.substring(0, 100)}...`} 
        <span 
          className="text-red-500 cursor-pointer"
          onClick={() => setShowFullText(!showFullText)}
        > 
          {showFullText ? " Show Less" : " Read More"}
        </span>
      </p>
      <hr className="my-4 border-gray-300" />
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <FaStar className="text-orange-400" />
          <p className="ml-2 text-gray-700 font-semibold">{ rating?.number}</p>
        </div>
        <p className="text-gray-500 flex items-center">
          <FaEye className="mr-1" /> {total_view}
        </p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews:PropTypes.object
}

export default NewsCard;
