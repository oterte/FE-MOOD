import { Outlet } from 'react-router-dom'
import Play from '../../components/playbar/Play'

function MusicPlayLayout() {
  return (
    <>
      <Outlet />
      <Play />
    </>
  )
}

export default MusicPlayLayout
