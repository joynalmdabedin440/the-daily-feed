import Marquee from "react-fast-marquee";
import { Link } from "react-router";


const LatestNews = () => {
    return (
        <div className="flex justify-start items-center gap-2 bg-gray-200 p-2 ">
            <p className=" py-2 px-3 text-white bg-[#D72050]">Latest</p>
            <Marquee className="space-x-10" pauseOnHover={true} speed={100} >
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;