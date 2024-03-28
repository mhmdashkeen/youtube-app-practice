import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="min-w-56 shadow-lg p-4 h-[100vh]">
            <ul>
                <li className="py-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="py-2">Shorts</li>
                <li className="py-2">Subscritions</li>
            </ul>
            <hr className="my-3"/>
            <p className="text-1xl font-bold mt-3 mb-2">Explore</p>
            <ul>
                <li className="py-2">History</li>
                <li className="py-2">Watch Later</li>
                <li className="py-2">Liked Videos</li>
            </ul>
        </div>
    );
}
 
export default SideNav;