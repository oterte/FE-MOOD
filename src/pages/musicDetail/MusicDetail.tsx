import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {
  Info,
  ComposerImg,
  ComposerName,
  MusicDesc,
  PlayBtn,
  CommentBox,
  CommentInput,
  Wrap,
  CommentBtn,
} from './MusicDetailSt'

function MusicDetail() {
  return (
    <Wrap>
      <Header />
      <Info>
        <ComposerImg></ComposerImg>
        <ComposerName>작곡가 이름</ComposerName>
        <MusicDesc>곡 설명입니다~~~~~~~~</MusicDesc>
        <PlayBtn>재생버튼</PlayBtn>
      </Info>
      <CommentBox>
        <CommentInput></CommentInput>
        <CommentBtn>댓글 작성</CommentBtn>
      </CommentBox>
      <Footer />
    </Wrap>
  )
}

export default MusicDetail
