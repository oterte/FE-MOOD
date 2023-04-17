import MyPageScraps from './MyPageScraps'
import MyPageComments from './MyPageComments'
import MyPageLikes from './MyPageLikes'
import MyPageEdits from './MyPageEdits'
import MyPageDeletes from './MyPageDeletes'
interface MyPageProps {
  items: string
}
function MyPageTabs({ items }: MyPageProps) {

  return (
    <>
      {items === 'Scrap' ? (
        <MyPageScraps/>
      ) : null}
      {items === 'Comment' ? (
        <MyPageComments/>
      ) : null}
      {items === 'Like' ? (
        <MyPageLikes/>
      ) : null}
      {items === 'Edit Profile' ? (
        <MyPageEdits/>
      ) : null}
      {items === 'Delete Account' ? (
        <MyPageDeletes/>
      ) : null}
    </>
  )
}

export default MyPageTabs
