import { useState } from 'react'
import LikeChart from '../chart/LikeChart'
import { Music } from '../chart/LikeChart'
import StreamingChart from '../chart/StreamingChart'

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
      <div>
        <button onClick={() => setActiveTab('like')}>좋아요 순 차트보기</button>
        <button onClick={() => setActiveTab('stream')}>
          스트리밍 순 차트보기
        </button>
      </div>

      {activeTab === 'like' && (
        <LikeChart
          musicId={musicId}
          likeStatus={likeStatus}
          musicList={musicList}
          onLikeUpdate={onLikeUpdate}
        />
      )}

      {activeTab === 'stream' && <StreamingChart />}
    </div>
  )
}

export default ChartTab
