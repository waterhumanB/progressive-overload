import * as S from './styles'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { ChangeEvent } from 'react'
import WorkoutMenu from '../../../components/WorkoutMenu'

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
      <WorkoutMenu />
      <div>커스텀 운동 추가</div>
      <div>운동 카드들</div>
      <div>하단 맨위로 가는 버튼과 운동 추가 버튼</div>
    </S.makeRountineContainer>
  )
}

export default MakeRoutine
