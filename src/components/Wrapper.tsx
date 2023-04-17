import styled from 'styled-components'

const Wrapper = ({ children }: { children: any }) => {
  return <StWrapper>{children}</StWrapper>
}

export default Wrapper

const StWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width:1200px){
    min-width: 600px;
  }
`

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
