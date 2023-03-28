import { useEffect, useState } from 'react';
import LikeCount from '../like/LikeCount';
import { Con, Wrap } from './ChartStyle';

export interface Music {
  id: number;
  title: string;
  likeCount?: number;
  musicId: number;
  musicTitle: string;
  composer: string;
  musicUrl: string;
  likesCount: number;
  likeStatus: boolean;
  streamCount?: number;
}

interface LikeChartProps {
  musicId: number | undefined;
  likeStatus: boolean;
  onLikeUpdate: (
    musicId: number,
    likeStatus: boolean,
    likeCount: number
  ) => void;
  musicList: Music[];
}

function LikeChart({
  musicId,
  likeStatus,
  onLikeUpdate,
  musicList,
}: LikeChartProps) {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 5 });

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleRange((prevRange) => {
        const newIndex = prevRange.start === 0 ? 5 : 0;
        return { start: newIndex, end: newIndex + 5 };
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrap>
      {musicList.length > 0 ? (
        musicList
          .slice(visibleRange.start, visibleRange.end)
          .map((music, index) => (
            <Con key={music.musicId}>
              <span style={{ flex: 0.2 }}>{index + visibleRange.start + 1}</span>
              <span style={{ flex: 0.4, textAlign: 'left' }}>{music.musicTitle}</span>
              <p style={{ flex: 0.3, textAlign: 'left' }}>{music.composer}</p>
              <audio controls style={{ flex: 0.3 }}>
                <source src={music.musicUrl} type="audio/mpeg" />
              </audio>
              <LikeCount
                musicId={music.musicId}
                likeCount={music.likesCount}
                likeStatus={
                  musicId === music.musicId ? likeStatus : music.likeStatus
                }
                onLikeUpdate={onLikeUpdate}
              />
            </Con>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </Wrap>
  );
}

export default LikeChart;