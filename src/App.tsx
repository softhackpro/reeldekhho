import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Layout from './components/layout/Layout';
import { Suspense, lazy } from 'react';
import MessagesPage from './pages/MessagePage';
import AddProduct from './pages/AddProduct';
import SearchReels from './components/SearchReels';


const Feed = lazy(() => import('./components/Feed'));
const ReelsPage = lazy(() => import('./pages/ReelsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const Profile = lazy(() => import('./pages/Profile'));
const SellerProfile = lazy(() => import('./components/profile/SellerProfile'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const ExplorePage = lazy(() => import('./pages/ExplorePage'));
const StoryViewer = lazy(() => import('./components/story/StoryViewer'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const Editprofile = lazy(() => import('./pages/Editprofile'));
const SavedPage =lazy(() => import('./pages/SavedPage'));

function AppContent() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/auth/us',
  //         {
  //           headers: {
  //             'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //             'Content-Type': 'application/json'
  //           },
  //         }
  //       )
  //       console.log(response);

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getUser();
  // }, [])

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Router>
        <Suspense fallback={<div className=' w-full h-full flex justify-center items-center text-black ' >Loading...</div>}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/stories/:username" element={<StoryViewer />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Feed />} />
              <Route path="/reels" element={<ReelsPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editProfile" element={<Editprofile />} />
              <Route path="/seller/:id" element={<SellerProfile />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path='/reels/:id' element={<SearchReels />} />
              <Route path='/saved' element={<SavedPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
