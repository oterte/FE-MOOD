import React, { useState } from 'react'

function MusicPost() {
  const [musicTitle, setMusicTitle] = useState('')
  const [musicContent, setMusicContent] = useState('')
  const [composer, setComposer] = useState('')
  const [status, setStatus] = useState('')

  const [music, setMusic] = useState<File | null>(null)

  const onChangeMusicHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setMusic(files[0])
    }
  }

  const onClickAddMusicHandler = () => {
    const formData = new FormData()

    for (let i of [musicTitle, musicContent, composer, status]) {
      formData.append(`${i}`, i)
    }
    if (!music) {
      throw new Error('no saved music')
    }

    formData.append('music', music)
  }

  return (
    <div>
      <input
        type="text"
        value={musicTitle}
        placeholder="곡 명 작성"
        onChange={(e) => setMusicTitle(e.currentTarget.value)}
      />
      <input
        type="text"
        value={musicContent}
        placeholder="곡 내용 작성"
        onChange={(e) => setMusicContent(e.currentTarget.value)}
      />
      <input
        type="text"
        value={composer}
        placeholder="곡 내용 작성"
        onChange={(e) => setComposer(e.currentTarget.value)}
      />
      <input type="file" onChange={onChangeMusicHandler} />
      <input
        type="string"
        accept="audio/*"
        value={status}
        onChange={(e) => setStatus(e.currentTarget.value)}
      />
      <button onClick={onClickAddMusicHandler}>제출</button>
    </div>
  )
}

export default MusicPost
