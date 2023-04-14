import React, { useState } from 'react'
import LikeChart, { Music } from '../chart/LikeChart'
import StreamingChart from '../chart/StreamingChart'
import {
  ChartBtnWrap,
  ChartTopWrap,
  ChartTopP,
  OrderBtn,
  OrderSpan,
} from './ChartStyle'

interface ChartTabProps {
  musicId: number | undefined
  likeStatus: boolean
  musicList: Music[]
  onLikeUpdate: (
    musicId: number,
    likeStatus: boolean,
    likeCount: number
  ) => void
}

function ChartTab({
  musicId,
  likeStatus,
  musicList,
  onLikeUpdate,
}: ChartTabProps) {
  const [activeTab, setActiveTab] = useState<'like' | 'stream'>('like')

  return (
    <div>
      <ChartTopWrap>
        <ChartTopP>무드 차트 TOP 10</ChartTopP>
        <ChartBtnWrap>
          <OrderBtn
            style={{
              backgroundColor: activeTab === 'like' ? '#4B372E' : '#f5f5f5',
              color: activeTab === 'like' ? '#EFEFEF' : 'black',
            }}
            onClick={() => setActiveTab('like')}
          >
            <OrderSpan>좋아요 순</OrderSpan>
          </OrderBtn>
          <OrderBtn
            style={{
              backgroundColor: activeTab === 'stream' ? '#4B372E' : '#f5f5f5',
              color: activeTab === 'stream' ? '#EFEFEF' : 'black',
            }}
            onClick={() => setActiveTab('stream')}
          >
            <OrderSpan>스트리밍 순</OrderSpan>
          </OrderBtn>
        </ChartBtnWrap>
      </ChartTopWrap>

      {activeTab === 'like' ? (
        <LikeChart
          musicId={musicId}
          likeStatus={likeStatus}
          musicList={musicList}
          onLikeUpdate={onLikeUpdate}
        />
      ) : (
        <StreamingChart />
      )}
    </div>
  )
}

export default React.memo(ChartTab)
