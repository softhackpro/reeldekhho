import { useEffect, useState } from "react";
import api from "../../services/api/axiosConfig";
let page = 1;

const useLoadReels = () => {
    const [reels, setReels] = useState([]);
    const [fetchedReelIds, setFetchedReelIds] = useState<string[]>([]);
    const [hasmore, setHasmore] = useState(true)

    const fetchReels = async () => {
        try {
            const response = await api.get('/post/get');
            const newReels = response.data.posts;
            setReels(newReels);
            setFetchedReelIds(newReels.map((reel: any) => reel._id));
            console.log(newReels);
        } catch (error) {
            console.error(error?.response?.data?.error);
        }
    }

    const loadReels = async () => {
        if (!hasmore) {
            return;
        }
        try {
            const response = await api.get(`/post/get?page=${page}&excludeIds=${fetchedReelIds.join(',')}`);
            const newReels = response.data.posts;
            if (newReels.length <= 0) {
                setHasmore(false);
            }
            setReels([...reels, ...newReels]);
            setFetchedReelIds([...fetchedReelIds, ...newReels.map((reel: any) => reel._id)]);
            if (newReels.length > 0) {
                page++;
            }
            console.log(newReels);
        } catch (error) {
            console.error(error?.response?.data?.error);
        }
    }

    useEffect(() => {
        fetchReels();
    }, [])

    return { reels, loadReels };
}

export default useLoadReels;