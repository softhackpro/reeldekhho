
import api from "../../services/api/axiosConfig";
import { useDispatch } from "react-redux";
import { removePost, setSavedPosts, updateSavedPost } from "../../store/slices/savedPost";
import { AppDispatch } from "../../store/store";

const useSavedPost = () => {
    
    const dispatch= useDispatch<AppDispatch>();

    const addSavedPost = async (id: string) => {
        try {
            const response = await api.post('/post/addSaved?postId=' + id);
            console.log(response.data);
            dispatch(updateSavedPost(response.data.savedPost))
        } catch (error) {
            console.error(error?.response?.data?.error);
        }
    };

    const getSavedPosts = async () => {
        try {
            const response = await api.get('/post/getsaved');
            console.log(response.data);
            dispatch(setSavedPosts(response.data.savedPosts))
        } catch (error) {
            console.error(error?.response?.data?.error || error);
        }
    };

    const removeSavedPost = async (id: string) => {
        try {
            console.log(id);
            const response = await api.delete(`/post/deletesaved?id=${id}`, { data: { postId: id } });
            console.log(response.data);
            
            const value= {
                _id: id
            }
            
            dispatch(removePost(value))
        } catch (error) {
            console.error(error);
        }
    };

    return {
        addSavedPost,
        getSavedPosts,
        removeSavedPost,
    };
};

export default useSavedPost;
