import { Link } from 'react-router-dom'
import Search from '../../pages/search/SearchBar'
import MenuBar from '../navigation/MenuBar'
import { H1, Left, Right, Wrap, Center } from './HeaderSt'

function Header() {
  const menuItems = ['Home', 'About', 'Contact']
  return (
    <Wrap>
      <Left>
        <MenuBar items={menuItems} />
      </Left>

      <Center>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <H1>MOOD</H1>
        </Link>
      </Center>

      <Right>
        <Search />
      </Right>
    </Wrap>
  )
}

export default Header
