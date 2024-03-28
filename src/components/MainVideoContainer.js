import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleShow } from "../slice/toggleSlice";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const MainVideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        videoList();
        dispatch(toggleShow());
    }, [])

    const videoList = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const videoResult = await data.json();
        // console.log(videoResult)
        setVideos(videoResult.items);
    }

    if (videos.length === 0) return <div>No Videos to Show</div>;

    return (
        <div className="flex p-4 flex-wrap justify-between">
            {videos.map(v => <VideoCard key={v.id} videos={v}/>)}
        </div>
    );
}
 
export default MainVideoContainer;