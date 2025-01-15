import { useEffect, useState } from 'react';
import api from '../../services/api/axiosConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../../store/slices/postSlices';

const useGetPosts = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const posts = useSelector((state) => state?.post?.posts);
    const dispatch = useDispatch();
    const page = useSelector((state) => state?.post?.page);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await api.get('/post/get?page=' + page);
                dispatch(setPost({
                    type: 'SET_POST', payload: response.data.posts
                }));

                console.log(response);
                console.log(page);


                console.log(response.data.posts);
            } catch (err) {
                setError(err.response?.data?.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        if (!posts?.length) {
            fetchPosts();
        } else {
            setLoading(false);
        }
    }, [posts?.length, dispatch]);


    const loadMorePosts = async () => {
        try {
            const response = await api.get(`/post/get?page=${page}`);
            if (response.data.posts.length > 0) {
                dispatch(setPost({ type: 'ADD_POST', payload: response.data.posts }));
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        }
    }

    return { loading, error, posts, loadMorePosts };
};

export default useGetPosts;
