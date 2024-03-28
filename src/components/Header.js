import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cacheResults } from "../slice/searchSlice";
import { suggestionHide, suggestionShow, toggle } from "../slice/toggleSlice";
import { YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
    const [serachText, setSearchText] = useState("");
    const [suggestionsList, setSuggestionsList] = useState([]);

    const searchCache = useSelector(store => store.search);
    const showSuggest = useSelector(store => store.toggle);
    const wrapperRef = useRef(null);
    const dispatch = useDispatch();

    const toggleSidenav = () => {
        dispatch(toggle());
    }
    useEffect(() => {
        const timer = setTimeout(() => {
                if (searchCache[serachText]) {
                    setSuggestionsList(searchCache[serachText])
                }else{
                    getSuggestionList();
                }
            }, 200);

        return () => {
            clearTimeout(timer);
        }
     }, [serachText]);

    const getSuggestionList = async () => {
        const response = await fetch(YOUTUBE_SEARCH_API + serachText);
        const json = await response.json();
        const suggestionResult = json.items.map(i => ({title: i.snippet.title, id: i.id}));
        setSuggestionsList(suggestionResult);
        dispatch(cacheResults({
            [serachText]: suggestionResult
        }))
    }

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            dispatch(suggestionHide());
        }
      };

      useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, [])
    return (
        <div className="flex py-3 px-6 shadow-md justify-between">
            <div className="flex">
            <button type="button" className="mr-4" onClick={toggleSidenav}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg></button>
            <div className="w-20">
                <img src={YOUTUBE_LOGO} alt="youtube"/>
            </div>
            </div>
            <div className="relative" ref={wrapperRef}>
                <div className="flex">
                    <input type="text" className="rounded-l-full border border-gray-500 w-80 p-2 px-4" placeholder="Search" value={serachText} onChange={(e) => setSearchText(e.target.value)} onFocus={() => dispatch(suggestionShow())}/>
                    <button type="button" className="rounded-r-full border border-gray-500 bg-gray-300 px-4">Search</button>
                </div>
                {showSuggest.showSuggestion && <div className="absolute rounded-lg shadow-lg w-[100%] top-[100%] left-0 h-80 overflow-y-auto bg-white">
                    <ul>
                        {suggestionsList.map(s => <li key={s.id.videoId} className="py-3 px-5"><Link to={`watch?v=${s.id.videoId}`}>{s.title}</Link></li>)}
                    </ul>
                </div>
                }
            </div>
            <div>
                
            </div>
        </div>
    );
}
 
export default Header;