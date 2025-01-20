import ProfileHeader from '../components/profile/ProfileHeader';
import PostGrid from '../components/profile/ProfileGrid';
import useAuth from '../hooks/useAuth';
import useGetPost from '../hooks/profile/useGetPost';
import { useSelector } from 'react-redux';
import { ProfilePostSkeloton } from '../components/profile/ProfilePostSkeloton';
import useFollow from '../hooks/useFollow';

export default function Profile() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    window.location.href = '/signup';
    return null;
  }

  const user = useSelector((state: any) => state?.auth?.user);

  const { followError, followLoading, following, followers } = useFollow()
  const { loading, error } = useGetPost();
  const posts = useSelector((state: any) => state.auth.posts || []);


  if (loading || followLoading) {
    return <ProfilePostSkeloton />;
  }


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ProfileHeader value={posts.length || 0} following={following.length} followers={followers.length} /> {/* Handle undefined posts */}
      <PostGrid posts={posts} />
    </div>
  );
}
