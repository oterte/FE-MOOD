import { useEffect, useState } from 'react';
import { getstreamingMusicList } from '../../api/chart';
import { Con, Wrap } from './ChartStyle';
import { Music } from './LikeChart';

function StreamingChart() {
  const [streamingList, setStreamingList] = useState<Music[]>([]);
  const [visibleRankStart, setVisibleRankStart] = useState(0);

  useEffect(() => {
    const fetchStreamingList = async () => {
      const response = await getstreamingMusicList();
      if (Array.isArray(response.streamingChart)) {
        setStreamingList(response.streamingChart);
      }
    };
    fetchStreamingList();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleRankStart((prevVisibleRankStart) => (prevVisibleRankStart === 0 ? 5 : 0));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [visibleRankStart]);

  return (
    <Wrap>
      {streamingList
        .slice(visibleRankStart, visibleRankStart + 5)
        .map((music, index) => (
          <Con key={music.musicId}>
            <span style={{ flex: 0.1 }}>{visibleRankStart + index + 1} </span>
            <span style={{ flex: 0.3 }}>{music.musicTitle}</span>
            <span style={{ flex: 0.2 }}>{music.composer}</span>
            <audio controls style={{ flex: 0.3 }}>
              <source src={music.musicUrl} type="audio/mpeg" />
            </audio>
          </Con>
        ))}
    </Wrap>
  );
}

export default StreamingChart;