import React, { useEffect, useState } from 'react';
import { composerList } from '../../api/comments';
import { Con1, Contents, Desc, H3, Li, P } from './ComposerListSt';

interface Music {
  id: number;
  name: string;
  title: string;
  description: string;
}

const ComposerList = () => {
  const [tab, setTab] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [composer, setComposer] = useState('');
  const [tabArr, setTabArr] = useState<Music[]>([]);

  const selectTabHandler = (id: number) => {
    setTab(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await composerList({ composer });
      setTabArr(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [composer]);

  return (
    <Contents>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {tabArr.map((music) => (
            <Li
              key={music.id}
              className={music.id === tab ? 'submenu focused' : 'submenu'}
              onClick={() => selectTabHandler(music.id)}
            >
              {music.name}
            </Li>
          ))}
          {tabArr.length > 0 && (
            <Desc>
              <Con1>
                <H3>{tabArr.find((music) => music.id === tab)?.title}</H3>
                <P>{tabArr.find((music) => music.id === tab)?.description}</P>
              </Con1>
            </Desc>
          )}
        </>
      )}
    </Contents>
  );
};

export default ComposerList;