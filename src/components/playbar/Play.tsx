import { useSelector } from 'react-redux'
import { RootState } from '../../redux/config/configStore'

function Play() {
  const data = useSelector((state: RootState) => {
    return state.musicPlayer
  })

  console.log(data)

  return (
    <div>
      <div>플레이 리스트</div>
    </div>
  )
}

export default Play
