# 점진적 과부하 Progressive Overload

### [프로젝트 배포 주소](progressive-overload-seven.vercel.app)

### [프로젝트 기획 및 기능 구현 관리 노션](https://www.notion.so/progressive-overload-645c836285204ec88747a03a472cd813?pvs=4)

# 기술 스택
- React, TypeScript, Styled-component, Redux-Toolkit
# 프로젝트 실행 방법

1. npm 설치
```
npm i 
```

2. git clone
```
git clone https://github.com/waterhumanB/progressive-overload.git
```

3. dependencies 설치
```
npm i 
```

4. 실행
```
npm start
```

# 프로젝트 기능 및 설명

## 1. 시작 페이지
![시작페이지](https://github.com/waterhumanB/progressive-overload/assets/69314161/b8ed0467-260e-411d-a31f-66c4e4199329)
- [x] 양 옆으로 이동할 수 있는 버튼과 이동할 때 애니메이션 구현
- [x] 이동할 때 하단에 현재 페이지 표시 및 버튼으로 이동 기능 구현
- [x] 마지막 입력 페이지마다 유효성 검사 기능 구현
## 2. 메인 페이지
![메인 페이지](https://github.com/waterhumanB/progressive-overload/assets/69314161/18b939ca-52a8-44bd-ba6a-8dc029bd8e43)
- [x] 처음 입력 했던 정보들을 보여주는 기능 구현
- [x] 유튜브 추천 루틴 페이지 이동 버튼 구현
- [x] 하단 루틴 추가 버튼과 하단 네이게이션으로 페이지 이동 구현
## 2-1. 유튜브 추천 루틴 페이지
![유튜브 추천 루틴](https://github.com/waterhumanB/progressive-overload/assets/69314161/47b9b19a-b677-4170-8efc-fcdd6a0a0174)
- [x] 상단 페이지 나가는 버튼 구현
- [x] 제목 밑으로 유튜브 추천 기능 버튼 및 양 옆으로 이동 버튼 기능 구현
- [x] 추천 루틴에 맞는 유튜브 영상 및 해당 영상으로 이동 기능 구현
## 2-2. 루틴 추가 페이지
![루틴 추가 페이지](https://github.com/waterhumanB/progressive-overload/assets/69314161/82e56a1e-4b17-45fd-8a8c-12e78aa25d0b)
- [x] 메인 페이지에서 하단 플러스 버튼 클릭시 하단 drop 버튼으로 루틴 운동 추가페이지로 이동 기능 구현
- [x] 3개의 필터로 각각 정보가 있는 운동들을 하단에 보여주는 기능 구현
- [x] 운동카드 오른쪽에 즐겨찾기 기능 구현
- [x] 커스텀 운동 추가, 수정, 삭제 기능 구현
- [x] 하단 스크롤 맨밑에 있을 때 윗방향 화살표 버튼으로 스크롤 최상단으로 이동 기능 구현
- [x] 운동 선택시 하단 오른쪽에 추가한 운동 갯수 표시 및 버튼 클릭 시 운동 추가 페이지로 이동 기능 구현
- [x] 루틴 추가 페이지로 이동 시 이름을 설정해서 새로운 루틴을 생성 구현 
## 2-3. 루틴 수정 및 삭제
![루틴 수정 및 삭제](https://github.com/waterhumanB/progressive-overload/assets/69314161/6f915496-dd76-4412-9db0-b76fe12a7488)
- [x] 루틴 시작 전 드래그앤 드롭으로 순서 변경 기능 구현
- [x] 루틴 시작 전 오른쪽 더보기 버튼으로 운동 변경 및 삭제 구현
- [x] 메인 페이지에서 루틴 오른쪽 더보기 버튼으로 루틴 이름과 운동 변경 및 삭제 기능 구현
## 2-4. 루틴 실행 및 완료
![루틴 실행 및 완료](https://github.com/waterhumanB/progressive-overload/assets/69314161/b4609c3b-e39f-49ac-9b23-c35552294bce)
- [x] 루틴 실행시 상단에 운동 이름과 운동 타겟 부위 및 남은 운동 갯수 구현
- [x] 무게와 횟수를 설정할 수 있고, 운동 완료 체크 시 휴식시간 타이머가 작동하고 끝나면 알림 소리 기능 및 휴식시간 설정 기능 구현
- [x] 운동 세트 추가 및 삭제, 모든 운동 완료하기, 모든 운동이 완료되면 다음 운동으로 넘어가는 기능 구현
- [x] 하단에 현재 진행 중인 운동을 전에 했던 기록을 보여주고 양옆으로 드래그앤 드롭으로 넘기는 기능 구현
- [x] 해당 운동의 운동 방법 유튜브 추천 영상 2가지 표시 구현
## 3. 요약 페이지
![요약페이지](https://github.com/waterhumanB/progressive-overload/assets/69314161/5dfce386-8c33-4db8-a733-76e6bec9b638)
- [x] 상단 도너츠 그래프로 총 운동한시간, 총 운동한 볼륨, 총 운동한 날짜를 보여주고 애니메이션 기능 구현
- [x] 운동 했던 데이터를 막대그래프로 표시 및 일간, 주간, 월간으로 데이터를 볼 수 있고, 총볼륨과 운동 시간의 필터로 데이터를 볼 수 있음
- [x] 막대 그래프를 Hover시 해당 그래프의 값을 볼 수 있고, 그래프를 양옆으로 드래그앤 드롭으로 이동 기능 구현
- [x] 하단 가상 데이터 추가 버튼으로 개발자가 임의로 만든 데이터를 추가해서 볼 수 있음 
## 4. 달력 페이지
![달력페이지](https://github.com/waterhumanB/progressive-overload/assets/69314161/136f068a-f0b1-4c31-919c-af92252b4188)
- [x] 상단 월별로 이동 버튼과 총볼륨 총운동시간으로 필터 버튼 구현
- [x] 달력에 현재 월의 전달과 앞달의 날짜를 받아와 빈칸 없이 표시 및 주말 글자색 다르게 하였고, 총볼륨과 총운동시간의 값에 따라 색이 그라데이션 기능 구현
- [x] 색이 칠해진 날짜 누르면 그 루틴의 결과 페이지로 이동 기능 구현
- [x] 하단 루틴 카드들은 1일 부터 말일로 보여주고, 카드 클릭시 해당 루틴의 결과 페이지로 이동 기능 구현