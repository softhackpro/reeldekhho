import { useState } from "react";
import api from "../../services/api/axiosConfig";

const useSavedPost = () => {
    const [savedPosts, setSavedPosts] = useState<any[]>([]); // Define type for savedPosts if needed
    const [isSaved, setIsSaved] = useState(false);

    const addSavedPost = async (id: string) => {
        setIsSaved(true)

        try {
            const response = await api.post('/post/addSaved?postId=' + id);
            console.log(response.data);
        } catch (error) {
            setIsSaved(false)
            console.error(error?.response?.data?.error);
        }
    };

    const getSavedPosts = async () => {
        try {
            const response = await api.get('/post/getsaved');
            setSavedPosts(response.data.savedPosts);
        } catch (error) {
            console.error(error?.response?.data?.error);
        }
    };

    const removeSavedPost = async (id: string) => {
        try {
            const response = await api.delete('/post/deletesaved', { data: { postId: id } });
            console.log(response.data.posts);
            setIsSaved(false)
            // Optionally update savedPosts state here if needed
        } catch (error) {
            console.error(error?.response?.data?.error);
        }
    };

    return {
        addSavedPost,
        getSavedPosts,
        removeSavedPost,
        savedPosts, // Return savedPosts for usage in components
        isSaved
    };
};

export default useSavedPost;
