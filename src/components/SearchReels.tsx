import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api/axiosConfig";
import ReelCard from "./reels/ReelCard";

const SearchReels = () => {

    const param = useParams();
    const id = param?.id
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState(null)

    const fetchReels = async () => {
        setLoading(true)
        try {
            const response = await api.get('/post/getbyid?id=' + id)
            setPost(response.data.post)
        } catch (error) {
            // console.log(error.messages);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (id) {
            fetchReels()
        }
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <div className=" h-[100dvh] w-full max-w-md m-auto bg-black overflow-hidden ">
            {post && < ReelCard reel={post} />}
        </div>
    )
}

export default SearchReels;