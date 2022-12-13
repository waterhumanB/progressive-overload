import * as S from './styles'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { ChangeEvent } from 'react'
import ExerciseMenu from '../../../components/ExerciseMenu'
import ExerciseCard from '../../../components/ExerciseCard'

const MakeRoutine = () => {
  const filterHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
  }
  return (
    <S.makeRountineContainer>
      <S.filterBox>
        <Arrow />
        <input placeholder='운동 이름 검색' onChange={filterHandleChange} />
      </S.filterBox>
      <ExerciseMenu />
      <div>커스텀 운동 추가</div>
      <ExerciseCard />
      <div>위로 올라가기</div>
      <div> + 3 운동 추가하기</div>
    </S.makeRountineContainer>
  )
}

export default MakeRoutine
