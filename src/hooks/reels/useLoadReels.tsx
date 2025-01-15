import { useEffect, useState } from "react";
import api from "../../services/api/axiosConfig";
let page = 1;

const useLoadReels = () => {

    const [reels, setReels] = useState([]);

    const fetchReels = async () => {
        try {
            const response = await api.get('/post/get');
            setReels(response.data.posts);
            console.log(response.data.posts);

        } catch (error) {
            console.error(error?.response?.data?.error);
        }
    }

    const loadReels = async () => {
        try {
            const response = await api.get('/post/get?page=' + page);
            setReels([...reels, ...response.data.posts]);
            if (response.data.posts.length > 0) {
                page++;
            }
            console.log(response.data.posts);
        } catch (error) {
            console.error(error?.response?.data?.error);
        }
    }

    useEffect(() => {
        fetchReels();
    }, [])

    return { reels, loadReels };
}

export default useLoadReels