import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setSocket } from "../store/slices/socketSlices";
const Socketwindow = () => {
    const user = useSelector(state => state?.auth?.user)
    console.log("user ", user);

    const dispatch = useDispatch();

    useEffect(() => {
        const socket = io(import.meta.env.VITE_APP_SOCKET_URL, {
            query: { userId: user?._id },
            transports: ["websocket"],
        });


        dispatch(setSocket(socket));

        socket.on("connect", (id) => {
            console.log("Connected to the server");
        });

        socket.on("connect_error", (error) => {
            console.error("Connection error:", error);
        });

        return () => {
            socket.disconnect();
            console.log("Socket disconnected");
        };
    }, [dispatch]);

    return null; 0
};

export default Socketwindow;

