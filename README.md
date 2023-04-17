# 🎹 [Mood-Classic] 감정에 따른 클래식 음악 추천 및 치유 서비스

## 당신의 기분은 지금 어떠신가요? 기분에 맞는 클래식 음악을 추천 드릴게요.
**클래식** 음악을 통해 감정적인 치유와 공감을 원하시는 분들, 기분의 영역을 클릭하거나 설문조사를 진행하고, 관련된 클래식 음악을 추천 받아보세요.

관련 사진

### 🎻 [추천 받으러 가보실까요?](https://mood-classic.site/)


## Contents (목차)
1. [Architecture](#Architecture)
2. [One Page Notion](#One-Page-Notion)
3. [Feature](#Feature)
4. [Stacks](#Stacks)
5. [Trouble Shooting](#Trouble-Shooting)
6. [API 명세서] (#API-명세서)
7. [Team](#Team)
8. [FE Role](#FE-Role)


# 🛠Architecture
![기술적 아키텍처 완](https://user-images.githubusercontent.com/103476685/232488401-21e8ec99-7748-460f-b92c-7357f0772e08.png)

# 📖One Page Notion
[📕 One page Notion 바로가기](https://www.notion.so/Mood-Classic-c51f26f6ce2f4442a747f01959dcbc94)

# 🎹Feature 
#### 🎻 아 오늘 행복한데 어떤 노래를 듣지??
  ```
  그럼 오늘은 새롭게 기분에 따라 클래식 음악을 추천 받는 것은 어떠세요??
  자신의 감정에 따라 영역을 클릭하여 알려주세요!!
  ```
#### 🎸 내 감정 상태에 따른 조금 더 자세한 클래식 추천을 받고싶어!!
  ```
  영역을 클릭해서 추천 받았지만, 조금 더 자세한 추천을 받고싶으면
  설문 조사를 진행하여 더 알맞은 음악 추천을 해드려요!!
  ```
#### 🎼 지금 인기 있는 클래식 음악은 무엇일까??
  ```
  어떤 클래식 음악을 들을지 모를 때, 지금 인기 있는 클래식 음악이 무엇인지 궁금할 때!!
  무드 차트 TOP 10을 확인 해보세요!!
  ```
#### 🎺 이 음악 좋은데 다른 사람들은 어떻게 생각할까??
  ```
  클래식 음악을 듣고 다른 사람들은 어떻게 생각하는지 궁금하시면
  해당 곡에 대한 댓글을 통해 사람들과 소통해보세요!!
  ```
#### 🎷 내 행복한 감정을 다른 사람들과 공유하고 싶어!!
  ```
  실시간 채팅방이 있습니다!! 
  지금 자신의 감정과 맞는 방에 들어가서 사람들과 내용을 공유해보세요!!
  ```
#### 📯 지금 행복한데 행복한 클래식 음악들을 듣고싶어!
  ```
  행복할 때 듣는 클래식 노래를 찾으시나요?? 
  검색창에 '행복' 이라고 검색해보세요! 행복한 클래식 음악들이 추천됩니다!
  감정 뿐만 아니라 클래식 음악 제목, 작곡가로도 검색 할 수 있어요!!
  ```
#### 🥁 나 베토벤 작곡가가 좋은데, 어떡하면 들을 수 있을까?
  ```
  작곡가 별로 정리되어 있어 원하는 작곡가를 눌러 확인해보세요!!
  모차르트, 쇼팽, 비발디도 있어요!
  ```


# 🎩Stacks
### Front End

<div>
  <img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=Typescript&logoColor=black"> 
  <img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=REACT&logoColor=black"> 
  <img src="https://img.shields.io/badge/REACT QUERY-FF4154?style=for-the-badge&logo=React Query&logoColor=white"> 
  <img src="https://img.shields.io/badge/styledComponents-DB7093?style=for-the-badge&logo=styledComponents&logoColor=white"> 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> 
  <img src="https://img.shields.io/badge/AXIOS-5A29E4?style=for-the-badge&logo=AXIOS&logoColor=white"> 
  <img src="https://img.shields.io/badge/REACT ROUTER-CA4245?style=for-the-badge&logo=REACTROUTER&logoColor=white"> 
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=#764ABC&logoColor=white"> 
  <img src="https://img.shields.io/badge/socket.io-3010101?style=for-the-badge&logo=socketdotio&logoColor=white"> 
</div>

<br />

### Dev tools
<div>
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=GITHUB&logoColor=white"> 
  <img src="https://img.shields.io/badge/VISUAL STUDIO CODE-007ACC?style=for-the-badge&logo=VISUAL STUDIO CODE&logoColor=white"> 
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> 
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=FIGMA&logoColor=white"> 
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> 
  <img src="https://img.shields.io/badge/amazons 3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> 
</div>

<br />
<br />

기술적 의사 결정 
<details>
  <summary>Typescript</summary>
  <div markdown="2">
    <div>
      
      - 높은 수준의 코드 탐색과 디버깅으로 버그 예방
        → 코드의 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거
        → 코드 자동 완성이나 실행 전 피드백을 제공하여 작업과 동시에 디버깅이 가능하여 생산성을 높일 수 있음
  </div>
</details>
  
<details>
  <summary>React-Query</summary>
  <div markdown="2">
    <div>
      
      - API 호출에 필요한 로직을 구현하는 것이 더욱 간단
      - 데이터를 가져오는 데 필요한 로딩, 에러 및 캐싱 상태를 쉽게 관리
      - API 호출을 자동으로 캐시하고, 일시적으로 인터넷 연결이 끊겼을 때에도 캐시된 데이터를 제공
  </div>
</details>
<details>
  <summary>Redux</summary>
  <div markdown="2">
    <div>
      
      1. 요구사항
        - 음악 플레이어 바를 구현하는데 있어 전역적으로 상태를 관리할 수 있어야 함
      
      2. 선택지
        1안) Recoil을 사용하여 전역 상태를 관리
        2안) Redux를 사용하여 전역 상태 관리
      
      3. 의사 결정
        - 처음 잡은 전역으로 관리하려는 state가 적었지만, 추후에 플레이 리스트를 만들거나 
          자신이 듣고 싶은 음악을 추가하는 등 음악 플레이어 바의 확장성이 넓어지고 커질 수 있어 
          Redux를 사용하는 것으로 결정하게 됨
  </div>
</details>





# 🩸Trouble Shooting
<details>
  <summary>[이재욱] 채팅방 역방향 무한 스크롤</summary>
  <div markdown="2">
    <div>
      
       1. 채팅방에서 무한 스크롤 구현 시 스크롤이 맨 위로 고정되는 문제
        스크롤을 최상단으로 올렸을 때, 새로운 데이터들이 로딩이 되면서
        스크롤의 위치가 최상단에서 이전 스크롤 위치로 변경돼야 한다.
         → 즉, 데이터가 로딩이 되고 스크롤의 위치가 맨 위로 되어 있어,
        보여지는 데이터의 값들이 순서대로 보여지지 않는데,
        스크롤의 위치를 변경하여 순서대로 보이도록 해야 한다.
      
      2. 접근
        1) prevScroll을 state 값으로 만들고, 들어왔을 때, scrollRef.current.scrollHeight 값으로 지정해준다.
        2) target이 들어왔을 때, 바뀐 scrollRef.current.scrollHeight 에서 prevScroll을 뺀 것을 scrollTop으로 옮겨준다.
        3) prevScroll을 scrollRef.current.scrollHeight로 지정해준다.
           → 바로바로 적용이 될 줄 알았지만, prevScroll이 scrollRef.current.scrollHeight로 지정되었을 때, 
            채팅 방의 채팅 내역을 불러오기 전에 prevScroll이 지정되어 문제가 생겼다.
      
      3. 해결
        - prevScroll을 시간 차를 두어 prevScroll을 지정해주어 채팅방 내역이 들어왔을 때, 
        prevScroll을 지정할 수 있도록 setTimeout을 사용하여 해결
      
      4. 리팩토링
        1) prevScroll을 setTimeout으로 시간을 지정했을 때, 지정한 시간보다 이전 채팅 방 내역을 받는 시간이 긴 경우 
        prevScroll의 지정이 늦게 될 것 같다는 생각이 들어 다른 방법을 찾아보았음.
        2) prevScroll은 받아온 채팅 내역 즉, 설정해둔 state(beforeChatData)가 변경되었을 때, 
        prevScroll을 다시 set하는 로직으로 구현하였다.
        3) 이로 인해 만약 채팅 방의 이전 내역들을 불러오는데, 시간이 걸리더라도 prevScroll이 
        필요한 타이밍에 변경되도록 로직을 수정하였다. 

  </div>
</details>
<details>
  <summary>[이재욱] Music Player Bar</summary>
  <div markdown="2">
    <div>
      
      1. 많은 페이지에서 사용하는 Music Player Bar를 만들어야 하는 문제
        많은 페이지에서 music player를 사용할 수 있는 컴포넌트를 만들어야 했다.
        요구 사항:  페이지 이동을 해도 음악이 끊기지 않아야 함
      
      2. 선택 사항
        1) Audio-h5-player 라이브러리를 사용하여 player bar을 구현
        2) Music Player을 Custom하여 구현
      
        → 이미 구현해둔 streaming을 올리는 api에서 사용하는 onTimeUpdate 이벤트가 
          Audio-h5-player에서 사용할 수 없고, 내가 원하는 대로 css를 사용하여 표현하기 어려워 
          custom하여 사용하기로 결정
      3. 접근 및 구현
        1) music의 총 시간과 진행되고 있는 시간 
          - audio에서 제공하는 currentTime 과 duration을 사용하여 
            01 : 33 / 03 : 45 같은 음악의 시간을 계산하여 표시해주었음
            → duration과 currentTime은 사용자가 알기 쉽게 알려주는 것이 아닌 
              3분이면 180.43614 같이 소수점까지 나타내기 때문에 이를 해결하기 위해 
              calcurate라는 함수를 만들어 분과 초를 나누어 표현해주었다.
        2) prograss bar 구현
          - 음악이 진행되고 있는 재생 바를 구현해야 하는데, dealt라는 state를 만듦
          - 음악의 진행률울 %로 구하기 위해 currentTime을 duration으로 나누고 이를 100을 곱하였음
            → 위의 값을 string으로 변환하여 setDealt로 dealt에 넣어줌
              (dealt를 스타일 컴포넌트의 background-color로 prop를 내려 구현)
        3) 전역으로 관리하며 페이지 이동 시에도 끊기지 않도록 구현
          - 전역으로 관리 : redux를 통해 모든 컴포넌트에서 접근할 수 있도록 구현
          - 페이지 이동시 음악이 끊기지 않도록 구현
            : react-router-dom에서 제공하는 outlet 메서드를 통해 layout을 구상하여 해결
  </div>
</details>
<details>
  <summary>[김명주] 카카오 로그인 구현</summary>
  <div>
    <div markdown="2">
      1. 카카오 로그인 구현 시, 백엔드에서 보내는 토큰을 받아올 수 없는 문제
        - 백엔드에서 구현과 관련된 로직을 전부 처리하고, jwt 토큰을 발급받아 프론트엔드로 건네주고, 
          프론트엔드에서 그 토큰을 저장한다.
          → 프론트엔드에서는 카카오 로그인 버튼만 구현하고, 버튼 클릭 시 지정된 Redirect URI에서 
            POST 요청을 통해 토큰을 받고 저장해야한다.
      
      2. 접근
        백엔드에서 모든 로직을 처리하고 프론트엔드에 토큰을 넘겨준다.
        →  프론트엔드에서는 버튼만 구현하고 클릭 시 Redirect URI로 이동하게 하면 되었으나, 
          서로 도메인 주소가 다를 경우 백엔드에서 보내준 토큰을 프론트엔드에서는 
          접근할 방법이 없어서 이 방법으로는 구현 실패
      
      3. 해결 
        - 프론트엔드에서 백엔드에게 인가코드를 넘겨주고, 백엔드에서는 받은 인가코드를 가지고 로직을 처리하여 
          프론트엔드에게 토큰을 넘겨준다
          → 프론트엔드는 로그인 버튼 클릭 시 지정된 Redirect URI로 이동하게 만들고 백엔드에서도 
            프론트엔드에서 접근 가능한 Redirect URI를 설정한 뒤, 프론트엔드는 그곳에서 카카오쪽에서 
            보내준 인가 코드를 백엔드에게 보내주고 JWT 토큰을 성공적으로 받아올 수 있었다.
  </div>
</details>
  
<details>
  <summary>[김명주] Refresh Token</summary>
  <div>
    <div markdown="2">
      1. 액세스 토큰 만료 시, 요청을 보내면 토큰이 갱신되지않고 에러가 발생
        - 백엔드에서 지정한 에러 status가 나오면, 리프레시 토큰을 이용하여 액세스 토큰을 갱신하고 
        만료 시 실패한 요청을 다시 실행한다.
          → 프론트엔드는 특정 에러 status 일 경우 액세스 토큰을 갱신하고 요청을 다시 보내야 한다.
      
      2. 접근
        1) interceptor.request에 setTimeout을 추가해 액세스 토큰 만료 직전에 갱신 
          →  axios 요청 시마다 서버에 토큰 갱신 요청을 보내게 되고 이렇게 될 경우 서버에 부하가 많이 가게 된다. 
          정상적으로 처리된다 해도 setTimeout이 매 요청마다 실행되기 때문에 갱신이 제대로 되지 않는다.
        2) interceptor.response에 에러 발생시, 그 에러 status가 백엔드에서 지정한 오류 번호일 시 갱신 요청
          → axios 요청에 대한 응답으로 오류가 발생하고 그 오류 코드가 백엔드에서 지정한 419 에러일 시, 
          토큰이 만료되어 생긴거라고 판단하여 리프레시 토큰을 이용해 액세스 토큰을 갱신한다.
          → interceptor를 이용해 응답을 가로채서, 토큰을 갱신하는데 까지는 성공했으나, 실패한 요청을 다시 보내는것은 구현 실패
        3) 만료로 인해 실패한 요청을 저장하고, 토큰 갱신 후 저장된 실패한 요청을 다시 실행
          → 어떤 instance에서 실패한 요청인지를 지정해주지 않아서 생긴 문제
          → interceptor 안에서 실패한 요청을 저장하고, 토큰을 갱신한 뒤에 저장한 요청을 다시 실행하여 리턴
      
      3. 보완
        로그인을 하지 않은 사람도 이용할 수 있는 기능을 로그인 된 사람이 이용할 경우에 토큰이 만료되면 에러가 발생하는 문제
          → instance를 추가로 하나 더 생성하여 대응
  </div>
</details>

# 📑 API 명세서
  [🔖 API 명세서 바로가기](https://www.notion.so/32ab485ea57e4ffdb7c2b90b0f251555?v=a4f5131a32a74d17971850d9afadabd7)
  

# 👨‍💻 Team

| Name | Position | Github |
|:-:|:-:|:-:|
| 이재욱👑 | Front End | https://github.com/UkTheBlood |
| 이인영 | Front End | https://github.com/yeooong-dev |
| 김명주 | Front End | https://github.com/oterte |
| 김상목👑 | Back End | https://github.com/SangmokKIM1994 |
| 신동윤 | Back End | https://github.com/zmtlzmtl |
| 곽승민 | Back End | https://github.com/kwakseungmin23 |


# 👩‍💻FE Role


| 이재욱👑 | 이인영 | 김명주 |
|:-:|:-:|:-:|
| Redux를 이용하여 play bar 구현<br/> 영역 클릭을 통한 음악 추천 <br/> 설문 조사 <br/> 채팅방 | 좋아요 순/ 스트리밍 순 차트 <br/> 작곡가 별 음악 추천 <br/> 검색 기능 <br/> 음악 상세 페이지 <br/> | 소셜 / 로컬 로그인 <br/> 마이페이지 <br/> refresh token |








