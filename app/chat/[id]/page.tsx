import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

// In server component we can get params in props
type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  console.log(id);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};

export default ChatPage;
