const ChatMessage = ({name, message}) => {
    return (
        <div className="flex items-center shadow-sm p-2">
          <img
            className="h-6"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
          <span className="font-bold text-sm px-1">{name}</span>
          <span className="text-sm">{message}</span>
        </div>
      );
}
 
export default ChatMessage;