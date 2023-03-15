import { Link } from 'react-router-dom'
import Search from '../../pages/search/SearchBar'
import { ComposerBtn, H1, Left, Right,  LoginBtn, Wrap } from './HeaderSt'


function Header() {
  return (
    <Wrap>
      <Left>
        <Link to="/" style={{ textDecoration:"none" }}>
          <H1>MOOD</H1>
        </Link>
      </Left>
    
      <Right>
        <Search />
        <Link to="/composer">
           <ComposerBtn>작곡가별 음악 추천받기</ComposerBtn>
        </Link>
     
        <Link to="/login">
          <LoginBtn>로그인</LoginBtn>
        </Link>
      </Right>
    </Wrap>
  )
}

export default Header

