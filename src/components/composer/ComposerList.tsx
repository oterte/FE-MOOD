import React, { useState } from 'react'
import { Con1, Contents, Desc, H3, Li, P } from './ComposerListSt'

const ComposerList = () => {
  const [tab, setTab] = useState(0)

  const tabArr = [
    {
      name: <Li>프레데리크 쇼팽</Li>,
      content: (
        <Con1>
          <H3>녹턴</H3>
          <P>녹턴은 녹턴 녹턴 녹턴</P>
        </Con1>
      ),
    },
    {
      name: <Li>안토니오 비발디</Li>,
      content: (
        <Con1>
          <H3>사계</H3>
          <P>봄, 여름, 가을, 겨울</P>
        </Con1>
      ),
    },
    {
      name: <Li>루트비히 판 베토벤</Li>,
      content: (
        <Con1>
          <H3>교향곡</H3>
          <P>베토벤 바이러스</P>
        </Con1>
      ),
    },
    {
      name: <Li>볼프강 아마데우스 모차르트</Li>,
      content: (
        <Con1>
          <H3>피겨의 결혼</H3>
          <P>모차르트 모차르트 모차르트</P>
        </Con1>
      ),
    },
  ]

  const selectTabHandler = (index: any) => {
    setTab(index)
  }

  return (
    <Contents>
      {tabArr.map((el, index) => (
        <li
          className={index === tab ? 'submenu focused' : 'submenu'}
          onClick={() => selectTabHandler(index)}
        >
          {el.name}
        </li>
      ))}
      <Desc>
        <p>{tabArr[tab].content}</p>
      </Desc>
    </Contents>
  )
}

export default ComposerList
