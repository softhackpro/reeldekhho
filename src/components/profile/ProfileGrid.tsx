import { Grid, Bookmark, Heart } from 'lucide-react';
// import useGetPost from '../../hooks/profile/useGetPost';
// import { useSelector } from 'react-redux';
// import { ProfilePostSkeloton } from './ProfilePostSkeloton';

export default function PostGrid(props) {
console.log(props);
const posts = props.posts
  // const { loading, error } = useGetPost();

  // const posts = useSelector((state:any) => state.auth.posts)
  // console.log(posts, 'aa ja bro');

  // if (loading) {
  //   return <ProfilePostSkeloton />
  // }
  // if (error) {
  //   return <div>Error: {error}</div>
  // }



  return (
    <>
    {posts ? <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Post Type Navigation */}
      <div className="flex justify-center border-t dark:border-gray-700">
        <div className="flex space-x-12">
          <button className="flex items-center space-x-2 px-4 py-4 border-t-2 border-black dark:border-white -mt-px">
            <Grid className="w-4 h-4" />
            <span className="text-sm font-medium">POSTS</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-4 text-gray-500 hover:text-gray-900">
            <Bookmark className="w-4 h-4" />
            <span className="text-sm font-medium">SAVED</span>
          </button>
        </div>
      </div>

      {/* Instagram-style Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-8 mt-4">
        {posts && posts.length && posts.map((post:any) => (

          <div key={post._id} className="relative aspect-square group">
            {/* Check File Type */}
            {["mp4", "webm", "mov"].includes(post?.file?.fileType?.toLowerCase()) ? (
              <video
                src={post.file.url}
                className="w-full h-full object-cover"
                muted
              ></video>
            ) : ["jpg", "jpeg", "png", "gif", "webp"].includes(post?.file?.fileType?.toLowerCase()) ? (
              <img
                src={post?.file.url}
                alt={post?.caption || "Post Image"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                Unsupported Format
              </div>
            )}

          </div>
        ))}
      </div>

    </div> : null}
    
    </>
    
  );
}