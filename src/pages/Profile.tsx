import ProfileHeader from '../components/profile/ProfileHeader';
import PostGrid from '../components/profile/ProfileGrid';
import useAuth from '../hooks/useAuth';
import useGetPost from '../hooks/profile/useGetPost';
import { useSelector } from 'react-redux';
import { ProfilePostSkeloton } from '../components/profile/ProfilePostSkeloton';

export default function Profile() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    window.location.href = '/signup';
    return null;
  }

  const { loading, error } = useGetPost();
  const posts = useSelector((state: any) => state.auth.posts || []); // Default to an empty array

  console.log(posts, 'aa ja bro');

  if (loading) {
    return <ProfilePostSkeloton />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ProfileHeader value={posts.length || 0} /> {/* Handle undefined posts */}
      <PostGrid posts={posts} />
    </div>
  );
}
