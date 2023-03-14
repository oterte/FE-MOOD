import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Main from '../pages/main/Main'
import Recommend from '../pages/recommend/Recommend'
import Login from '../pages/login/Login'
import SignUp from '../pages/signup/SignUp'
import MusicDetail from '../pages/musicDetail/MusicDetail'
import Composer from '../pages/composer/Composer'
import MusicPost from '../pages/musicPost/MusicPost'
import Survey from '../pages/survey/Survey'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/recommend/music/:id" element={<MusicDetail />} />
        <Route path="/composer" element={<Composer />} />
        <Route path="/musicpost" element={<MusicPost />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
