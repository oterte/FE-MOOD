import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/main/Main'
import Recommend from '../pages/recommend/Recommend'
import Login from '../pages/login/Login'
import SignUp from '../pages/signup/SignUp'
import MusicDetail from '../pages/musicDetail/MusicDetail'
import Composer from '../pages/composer/Composer'
import MusicPost from '../pages/musicPost/MusicPost'
import Survey from '../pages/survey/Survey'
import SearchBar from '../pages/search/SearchBar'
import SearchResultPage from '../pages/search/SearchResultPage'
import Auth from '../pages/auth/Auth'
import MyPage from '../pages/mypage/MyPage'
import ChatRoom from '../pages/chatRoom/ChatRoom'
import SelectChat from '../pages/chatRoom/SelectChat'
import MyPageDeleteDone from '../pages/mypage/MyPageDeleteDone'
import MusicPlayLayout from '../pages/MusicPlayLayout/MusicPlayLayout'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/api/kakao/callback" element={<Auth />} />
        <Route element={<MusicPlayLayout />}>
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/recommend/music/:id" element={<MusicDetail />} />
          <Route path="/composer" element={<Composer />} />
          <Route path="/musicpost" element={<MusicPost />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/searchresultpage" element={<SearchResultPage />} />
          <Route path="/selectroom" element={<SelectChat />} />
          <Route path="/chatroom/:id" element={<ChatRoom />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/delete" element={<MyPageDeleteDone />} />
        </Route>

  

      </Routes>
    </BrowserRouter>
  )
}

export default Router
