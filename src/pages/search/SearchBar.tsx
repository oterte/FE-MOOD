import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CloseButton,
  SearchButton,
  SearchContainer,
  SearchInput,
} from './SearchBarSt'
import { BsSearch } from 'react-icons/bs'
import { BsX } from "react-icons/bs";

function SearchBar() {
  const [showInput, setShowInput] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleClose = () => {
    setShowInput(false)
  }

  const onChangeHandler = (e: any) => {
    setSearchTerm(e.target.value)
  }

  const onClickSearchHandler = () => {
    const query = encodeURIComponent(searchTerm)
    navigate(`/SearchResultPage?query=${query}`)
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickSearchHandler()
    }
  }

  return (
    <SearchContainer>
      <SearchInput className={showInput ? 'show' : ''}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          style={{ paddingLeft: '1rem' }}
          value={searchTerm}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </SearchInput>
      {showInput ? (
        <>
          <SearchButton onClick={onClickSearchHandler}><BsSearch size="23"/></SearchButton>
          <CloseButton onClick={handleClose}><BsX size="38"/></CloseButton>
        </>
      ) : (
        <SearchButton onClick={() => setShowInput(true)}>
          <BsSearch size="25" />
        </SearchButton>
      )}
    </SearchContainer>
  )
}

export default SearchBar
