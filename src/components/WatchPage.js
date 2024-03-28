import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { suggestionHide, toggleHide } from "../slice/toggleSlice";
import { YOUTUBE_VIDEOS_BY_ID } from "../utils/constants";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [param] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleHide());
        dispatch(suggestionHide());
        // videoDetailByID();
    }, []);

    // const videoDetailByID = async () => {
    //     const data = await fetch(YOUTUBE_VIDEOS_BY_ID);
    //     const videoResult = await data.json();
    //     console.log(videoResult);
    // }
    return (
        <div className="w-[100%] p-4 rounded-lg flex">
            <iframe width="800" height="460" src={"https://www.youtube.com/embed/"+param.get("v")+"?si=uuZBQQf62fql7KcR"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <LiveChat />
        </div>
    );
}
 
export default WatchPage;