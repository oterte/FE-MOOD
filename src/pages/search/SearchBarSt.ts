import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right:50px;
`

export const SearchButton = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`

export const SearchInput = styled.div`
  height: 0;
  overflow: hidden;

  input {
    width:300px;
    height: 30px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    background-color: #f2f2f2;
    margin-right:10px;
  }

  &.show {
    height: auto;
    overflow: visible;
  }
`

export const CloseButton = styled.button`
  font-size: 16px;
  padding:10px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`
