import { useState, MouseEvent } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getUserInfoData } from '../../states/user'
import { ReactComponent as Female } from '../../assets/imgs/female.svg'
import { ReactComponent as Male } from '../../assets/imgs/male.svg'
import { ReactComponent as Youtube } from '../../assets/imgs/youtube.svg'
import { ReactComponent as DotMenu } from '../../assets/imgs/dot_menu.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import RoutineAddBtn from '../../components/RoutineAddBtn'
import DropDown from '../../components/DropDown'
import { deleteRoutine, getRoutineData } from '../../states/routines'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const naviRoutineMakeRouter = {
  to: '/routine/routine-make',
}
const naviRoutineEditRouter = {
  to: '/routine/routine-make/edit',
}

const Routine = () => {
  const userInfoSeletor = useAppSelector(getUserInfoData)
  const routineSeletor = useAppSelector(getRoutineData)
  const dispatch = useAppDispatch()
  const routineByIdList = Object.values(routineSeletor.routines.byId)
  const [nowRoutineId, setNowRoutineId] = useState<string>('')
  const [exerciseAddDropDown, setExerciseAddDropDown] = useState(false)
  const [routineAddDropDown, setRoutineAddDropDown] = useState(false)
  const ExerciseAddtoggleDropDown = () => {
    setExerciseAddDropDown(!exerciseAddDropDown)
  }
  const RoutineAddtoggleDropDown = () => {
    setRoutineAddDropDown(!routineAddDropDown)
  }
  const routineIdHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setNowRoutineId(e.currentTarget.name)
    setRoutineAddDropDown(!routineAddDropDown)
  }
  const routineDeleteDispathHandler = () => {
    const routineData = {
      id: routineSeletor.routines.byId[nowRoutineId].id,
      title: routineSeletor.routines.byId[nowRoutineId].title,
    }
    dispatch(deleteRoutine(routineData))
  }
  return (
    <S.routineContainer>
      <S.userContainer>
        <S.userBox className='nickName'>
          <span>{userInfoSeletor.user.nickName}</span>
          {userInfoSeletor.user.gender === '남자' ? <Male /> : <Female />}
        </S.userBox>
        <S.userBox className='info'>
          <div>나이 : {userInfoSeletor.user.age}</div>
          <div>키 : {userInfoSeletor.user.tall}cm</div>
          <div>몸무게 : {userInfoSeletor.user.weight}kg</div>
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
        {routineByIdList.map((data) => (
          <S.routineCard key={data.id}>
            <S.routineWorkoutCount>{data.workout.length}</S.routineWorkoutCount>
            <S.routineInfoBtn>
              <S.routineTitle>{data.title}</S.routineTitle>
              {!data.recent ? (
                <S.routineRecent>
                  <div>{data.recent[0]}</div>
                  <div>{data.recent[1]}</div>
                </S.routineRecent>
              ) : (
                <S.routineRecent>최근 수행한 날짜가 없습니다.</S.routineRecent>
              )}
            </S.routineInfoBtn>
            <S.routineMenuBtn name={data.id} onClick={routineIdHandler}>
              <DotMenu />
            </S.routineMenuBtn>
          </S.routineCard>
        ))}
      </S.routineBox>
      <RoutineAddBtn toggleDropDown={ExerciseAddtoggleDropDown} />
      <DropDown
        twoMenu
        twoMenuValue1='루틴 추가하기'
        twoMenuValue2='취소'
        dropDown={exerciseAddDropDown}
        toggleDropDown={ExerciseAddtoggleDropDown}
        naviRoute={naviRoutineMakeRouter}
      />
      <DropDown
        threeMenu
        threeMenuValue1='루틴 수정 하기'
        threeMenuValue2='루틴 삭제 하기'
        threeMenuValue3='취소'
        deleteFuction={routineDeleteDispathHandler}
        dropDown={routineAddDropDown}
        toggleDropDown={RoutineAddtoggleDropDown}
        naviRoute={naviRoutineEditRouter}
      />
      <Footer />
    </S.routineContainer>
  )
}

export default Routine
