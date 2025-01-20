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
            console.log("I am run ng fetch post ");

            setLoading(true);
            try {
                const excludeIds = posts.map(post => post._id).join(',');
                const response = await api.get(`/post/get?page=${page}&excludeIds=${excludeIds}`);
                dispatch(setPost({
                    type: 'ADD_POST', payload: response.data.posts
                }));
            } catch (err) {
                setError(err.response?.data?.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        if (!posts?.length) {
            setTimeout(() => {
                fetchPosts();
            }, 5000)
            fetchPosts();
        } else {
            setLoading(false);
        }
    }, [posts?.length, dispatch, page]);

    const loadMorePosts = async () => {
        try {
            const excludeIds = posts.map(post => post._id).join(',');
            const response = await api.get(`/post/get?page=${page}&excludeIds=${excludeIds}`);
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