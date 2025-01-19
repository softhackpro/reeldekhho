import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ChatList from '../components/chat/ChatList';
import ChatWindow from '../components/chat/ChatWindow';
import api from '../services/api/axiosConfig';

export default function MessagesPage() {
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const { id } = useParams(); // Extract chat ID from URL params
    const navigate = useNavigate();

    // Fetch all chats on component mount
    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await api.get('/message/getee'); // Fetch all user conversations
                if (response.data) {
                    setChats(response.data); // Store conversations in state
                }
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        };

        fetchChats();
    }, []);

    // Fetch the selected chat whenever the id changes
    useEffect(() => {
        const fetchChatById = async (chatId) => {
            try {
                const response = await api.get(`/message/info?id=${chatId}`); // Fetch chat by ID
                const newChat = response.data?.user;
                if (newChat) {
                    setChats((prevChats) => {
                        // Avoid duplicates before pushing
                        if (!prevChats.find((chat) => chat._id === newChat._id)) {
                            return [...prevChats, newChat];
                        }
                        return prevChats;
                    });
                    setSelectedChat(response.data?.chat); // Set the selected chat
                }
            } catch (error) {
                console.error('Error fetching chat by ID:', error);
            }
        };

        if (id) {
            const chat = chats.find((chat) => chat._id === id); // Check if chat already exists
            if (chat) {
                setSelectedChat(chat); // Set from local state
            } else {
                fetchChatById(id); // Fetch from server if not found
            }
        } else {
            setSelectedChat(null); // Clear selected chat if no ID is provided
        }
    }, [id, chats]);

    return (
        <div className="h-[calc(100vh-4rem)] overflow-hidden w-full flex bg-white dark:bg-gray-900">
            {/* Chat List */}
            <div
                className={`${id ? 'hidden md:block' : 'block'
                    } w-full h-full md:w-96 border-r dark:border-gray-700`}
            >
                <ChatList
                    chats={chats}
                    onSelectChat={(chatId) => {
                        navigate(`/messages/${chatId}`);
                    }}
                />
            </div>

            {/* Chat Window */}
            <div className={`${id ? 'block' : 'hidden'} md:block w-full h-full`}>
                {id && selectedChat ? (
                    <div className="h-full w-full flex flex-col">
                        {/* Back button for mobile view */}
                        <button
                            onClick={() => navigate('/messages')}
                            className="md:hidden p-4 flex items-center text-gray-600 dark:text-gray-300"
                        >
                            <ArrowLeft className="w-6 h-6 mr-2" />
                            Back to messages
                        </button>
                        <div className="w-full h-full">
                            <ChatWindow chats={chats} chatId={id} />
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                        Select a conversation to start messaging
                    </div>
                )}
            </div>
        </div>
    );
}
