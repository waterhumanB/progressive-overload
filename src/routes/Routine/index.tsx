import { useState, useCallback } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getUserInfoData } from '../../states/user'
import { ReactComponent as Female } from '../../assets/imgs/female.svg'
import { ReactComponent as Male } from '../../assets/imgs/male.svg'
import { ReactComponent as Youtube } from '../../assets/imgs/youtube.svg'
import { ReactComponent as DotMenu } from '../../assets/imgs/dot_menu.svg'
import * as S from './styles'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import { RoutineAddBtn } from '../../components/Routine'
import DropDown from '../../components/DropDown'
import { deleteRoutine, getRoutineData } from '../../states/routines'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { fetchedDate } from '../../utils/fetchedDate'

const naviRoutineMakeRouter = {
  to: '/routine/routine-make',
}

const Routine = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [nowRoutineId, setNowRoutineId] = useState<string>('')
  const [exerciseAddDropDown, setExerciseAddDropDown] = useState(false)
  const [routineAddDropDown, setRoutineAddDropDown] = useState(false)

  const userInfoSelector = useAppSelector(getUserInfoData)
  const routineSelector = useAppSelector(getRoutineData)
  const routineByIdList = Object.values(routineSelector.routines.byId)

  const latestRoutineList = routineByIdList.sort(
    (a, b) => Date.parse(a.recent[a.recent.length - 1]?.endAt) - Date.parse(b.recent[b.recent.length - 1]?.endAt)
  )

  const naviRoutineEditRouter = {
    to: '/routine/routine-make/edit',
    state: { state: routineSelector.routines.byId[nowRoutineId] },
  }

  const ExerciseAddToggleDropDown = () => {
    setExerciseAddDropDown(!exerciseAddDropDown)
  }
  const RoutineAddToggleDropDown = () => {
    setRoutineAddDropDown(!routineAddDropDown)
  }
  const routineIdHandler = useCallback((id: string) => {
    setNowRoutineId(id)
    setRoutineAddDropDown(!routineAddDropDown)
  }, [])
  const routineDeleteDispatchHandler = () => {
    dispatch(deleteRoutine({ id: nowRoutineId }))
  }

  const routineReadyPageRouter = useCallback((id: string) => {
    navigate('/routine/routine-ready', { state: { ...routineSelector.routines.byId[id] } })
  }, [])

  return (
    <S.routineContainer>
      <S.userContainer>
        <S.userBox className='nickName'>
          <span>{userInfoSelector.user.nickName}</span>
          {userInfoSelector.user.gender === '남자' ? <Male /> : <Female />}
        </S.userBox>
        <S.userBox className='info'>
          <div>나이 : {userInfoSelector.user.age}</div>
          <div>키 : {userInfoSelector.user.tall}cm</div>
          <div>몸무게 : {userInfoSelector.user.weight}kg</div>
        </S.userBox>
      </S.userContainer>
      <S.subMenuContainer>
        <div>나의 운동 루틴</div>
        <Link to='/routine/youtube' className='youtube'>
          <Youtube className='logo' />
          Youtube 추천 운동 루틴
        </Link>
      </S.subMenuContainer>
      <S.routineBox>
        {latestRoutineList.length !== 0 &&
          latestRoutineList.map((data) => (
            <S.routineCard key={data.id}>
              <S.routineWorkoutCount>{data.workout.length}</S.routineWorkoutCount>
              <S.routineInfoBtn onClick={() => routineReadyPageRouter(data.id)}>
                <S.routineTitle>{data.title}</S.routineTitle>
                {data.recent.length !== 0 ? (
                  <S.routineRecent>
                    <div>{fetchedDate(data.recent[data.recent.length - 1]?.endAt)}</div>
                  </S.routineRecent>
                ) : (
                  <S.routineRecent>최근 수행한 날짜가 없습니다.</S.routineRecent>
                )}
              </S.routineInfoBtn>
              <S.routineMenuBtn onClick={() => routineIdHandler(data.id)}>
                <DotMenu />
              </S.routineMenuBtn>
            </S.routineCard>
          ))}
      </S.routineBox>
      {latestRoutineList.length === 0 && (
        <S.noRoutineData>
          루틴을 추가하려면 하단 버튼 클릭하세요!
          <br /> 요약페이지에서 가상데이터를 추가할 수 있어요!
        </S.noRoutineData>
      )}
      <RoutineAddBtn toggleDropDown={ExerciseAddToggleDropDown} />
      <DropDown
        twoMenu
        twoMenuValue1='루틴 추가하기'
        twoMenuValue2='취소'
        dropDown={exerciseAddDropDown}
        toggleDropDown={ExerciseAddToggleDropDown}
        naviRoute={naviRoutineMakeRouter}
      />
      <DropDown
        threeMenu
        threeMenuValue1='루틴 수정 하기'
        threeMenuValue2='루틴 삭제 하기'
        threeMenuValue3='취소'
        deleteFunction={routineDeleteDispatchHandler}
        dropDown={routineAddDropDown}
        toggleDropDown={RoutineAddToggleDropDown}
        naviRoute={naviRoutineEditRouter}
      />
      <Footer />
    </S.routineContainer>
  )
}

export default Routine
