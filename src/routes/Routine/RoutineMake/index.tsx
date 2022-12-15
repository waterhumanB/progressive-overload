import * as S from './styles'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { ChangeEvent, useState } from 'react'
import ExerciseMenu from '../../../components/ExerciseMenu'
import ExerciseCard from '../../../components/ExerciseCard'
import { useNavigate } from 'react-router-dom'

const INIT_DATA = { more: '전체', target: '전체', category: '전체' }

const RoutineMake = () => {
  const [filterExercise, setFilterExercise] = useState<object>(INIT_DATA)
  const [searchExercise, setSearchExercise] = useState<string>('')

  const navigate = useNavigate()

  const searchHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchExercise(e.currentTarget.value)
  }

  const customExerciseRouter = () => {
    navigate('./custom-exercise')
  }

  return (
    <S.makeRountineContainer>
      <S.filterBox>
        <Arrow />
        <input placeholder='운동 이름 검색' onChange={searchHandleChange} />
      </S.filterBox>
      <ExerciseMenu filterExercise={filterExercise} setFilterExercise={setFilterExercise} />
      <S.addBtnBox onClick={customExerciseRouter}>
        <S.addBtn>+</S.addBtn>
        <span>커스텀 운동 추가</span>
      </S.addBtnBox>
      <ExerciseCard filterExercise={filterExercise} searchExercise={searchExercise} />
      <div>위로 올라가기</div>
      <div> + 3 운동 추가하기</div>
    </S.makeRountineContainer>
  )
}

export default RoutineMake
