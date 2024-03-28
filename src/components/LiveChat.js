import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../slice/chatSlice";
import { generateRandomName, getRandomId, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const messages = useSelector(store => store.chat.message);
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                id: getRandomId(),
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }))
        }, 1000)
        return () => {
            clearInterval(i);
        }
    }, []);

    return (
        <div className="flex flex-col flex-1">
            <h3 className="font-bold text-2xl p-4 pt-0">Live Chat</h3>
            <div className="ml-4 p-4 h-[360px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                {messages.map(m => <ChatMessage key={m.id} name={m.name} message={m.message}/>)}            
            </div>
            <form
                className="w-full p-2 ml-2"
                onSubmit={(e) => {
                e.preventDefault();

                dispatch(
                    addMessage({
                    name: "Ashkeen",
                    message: liveMessage,
                    })
                );
                setLiveMessage("");
                }}
            >
                <input
                className="rounded-l-full border border-gray-400 w-80 p-2 px-4"
                type="text"
                value={liveMessage}
                onChange={(e) => {
                    setLiveMessage(e.target.value);
                }}
                />
                <button className="rounded-r-full border border-gray-400 bg-gray-200 p-2 px-4">Send</button>
            </form>
        </div>
    );
}
 
export default LiveChat;