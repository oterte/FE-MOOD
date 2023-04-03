import styled from 'styled-components'

const Wrapper = ({ children }: { children: any }) => {
  return <StWrapper>{children}</StWrapper>
}

export default Wrapper

const StWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 200vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-top: 4rem;
  padding-bottom: 10rem;
`
