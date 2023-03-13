import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import AddComment from '../../components/musicdetail/AddComment'
import CommentsList from '../../components/musicdetail/CommentsList'
import {
  Info,
  ComposerImg,
  ComposerName,
  MusicDesc,
  PlayBtn,
  Wrap,
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
      <CommentsList />
      <AddComment />
      <Footer />
    </Wrap>
  )
}

export default MusicDetail
