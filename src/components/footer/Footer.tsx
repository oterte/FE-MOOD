import { Link } from 'react-router-dom'
import { FooterConDiv, FooterContent, FooterDiv, H1 } from './FooterSt'

function Footer() {
  return (
    <FooterDiv>
      <FooterConDiv>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <H1>MOOD</H1>
        </Link>
        <FooterContent>Name</FooterContent>
      </FooterConDiv>
    </FooterDiv>
  )
}

export default Footer
