import { Link } from 'react-router-dom'
import { ComposerBtn, H1, Left, Right,  LoginBtn, SearchBox, Wrap } from './HeaderSt'


function Header() {
  return (
    <Wrap>
      <Left>
        <Link to="/" style={{ textDecoration:"none" }}>
          <H1>MOOD</H1>
        </Link>
      </Left>
    
      <Right>
        <SearchBox>돋보기</SearchBox>
        <ComposerBtn>작곡가별 음악 추천받기</ComposerBtn>
        <LoginBtn>로그인</LoginBtn>
      </Right>
    </Wrap>
  )
}

export default Header

