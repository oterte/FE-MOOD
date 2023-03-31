export interface ComposerArr {
  id: number
  composer: string
  explain: string
  songs: string
  backgroundColor: string
}

export const ComposerArr = [
  {
    id: 1,
    composer: 'Frédéric Chopin',
    koreanName: '프레데리크 쇼팽 (1810-1849)',
    explain:
      '프레데리크 쇼팽은 낭만주의 시대의 대표적인 작곡가로 그의 모든 인생을 피아노에 바쳤고, 피아니스트들은 그를 피아노의 절대신이라고 생각합니다. 그는 그 어떤, 그 어느 작곡가보다도 훨씬 더 피아노와 밀접하게 연관되어 있습니다. ',
    songs: ['녹턴', '즉흥 환상곡', '강아지 왈츠', '뱃노래', '환상곡'],
    backgroundColor: '#4b372e',
  },
  {
    id: 2,
    composer: 'Antonio Vivaldi',
    koreanName: '안토니오 비발디 (1695-1741)',
    explain:
      '안토니오 비발디는 18세기 이탈리아의 바로크 시대 작곡가로 현악기를 위한 혁신적인 연주법과 아름다운 멜로디로 인기를 얻었습니다. 그의 대표작 중 하나인 ‘사계’, ‘조화의 영감’은 전 세계적으로 유명하며, 현대 음악에서도 많이 인용되고 있습니다.',
    songs: ['사계', '조화의 영감', 'Gloria', '첼로 협주곡', 'Magnificat'],
    bgColor: '#4b372e',
  },
  {
    id: 3,
    composer: 'Ludwig van Beethoven',
    koreanName: '루트비히 판 베토벤 (1778-1827)',
    explain:
      '루트비히 판 베토벤은 독일의 작곡가로 고전시대의 대표적인 작곡가이며 음악 역사상 크나큰 업적을 이룩한 작곡가로 평가받습니다. 게다가 음악가에게 사형선고나 다름없는 청각장애를 딛고 위대한 유산을 일구었기 때문에 불굴의 의지와 인간승리를 상징하는 인물로 유명합니다. 그의 음악에서도 이러한 고뇌와 인생 역전의 분위기가 잘 드러납니다.',
    songs: ['교향곡', '협주곡', '피아노 소나타', '첼로 소나타', '운명 교향곡'],
  },
  {
    id: 4,
    composer: 'Wolfgang Amadeus Mozart',
    koreanName: '볼프강 아마데우스 모차르트 (1756-1791)',
    explain:
      '볼프강 아마데우스 모차르트는 오스트리아의 작곡가로, 고전시대 대표적인 작곡가 중 한 사람입니다. 그의 작품은 극적이고 감성적이며, 뛰어난 작곡 기술과 명확한 음악적 아이디어를 바탕으로 세련되고 아름다운 멜로디와 풍부한 하모니를 특징으로 합니다.',
    songs: [
      '오페라 피겨의 결혼',
      '교향곡',
      '협주곡',
      '성악곡',
      '작은별 변주곡',
    ],
  },
]
