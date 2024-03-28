import { Link } from "react-router-dom";
import { YOUTUBE_THUMBNAIL } from "../utils/constants";
import { dateformat } from "../utils/dayformat";
import { convertViews } from "../utils/viewsformat";

const VideoCard = ({ videos }) => {
    const { channelTitle, title, publishedAt, thumbnails } =  videos.snippet;
    // console.log(videos);
    return (
        <div className="w-[32%] mb-4">
            <Link to={`watch?v=${videos.id}`}>
                <img className="w-[100%] shadow-lg rounded-lg" src={thumbnails.medium.url} alt={channelTitle}/>
                <p className="text-base font-bold mt-2 line-clamp-2">{title}</p>
                <p className="my-2 text-sm">{channelTitle}</p>
                <p className="text-xs text-gray-400">{convertViews(videos.statistics.viewCount)} views | {dateformat(publishedAt)}</p>
            </Link>
        </div>
    );
}
 
export default VideoCard;