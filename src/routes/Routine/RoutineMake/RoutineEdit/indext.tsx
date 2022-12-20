import * as S from './styles'
import { ReactComponent as Arrow } from '../../../../assets/imgs/arrow.svg'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { getExerciseData } from '../../../../states/exercise'
import { getTypesData } from '../../../../states/types'
import { findCategory, findTarget, findType } from '../../../../utils/findmenu'

const RoutineEdit = () => {
  const location = useLocation() as { state: { addExercise: string[] } }
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)

  return (
    <S.routineEditPageConatiner>
      <S.routineEditTitleBox>
        <button type='button'>
          <Arrow />
        </button>
        <div>나만의 루틴 만들기</div>
      </S.routineEditTitleBox>
      <S.routineEdtDataBox>
        <S.routineEdtInput inputValue>
          <input placeholder='루틴 이름을 입력해주세요!' />
        </S.routineEdtInput>
        {location.state.addExercise.map((data) => (
          <div key={data}>
            <div>
              <div>{findCategory(exerciseSelector.exercises.byId[data].categoryId)}</div>
              <div>{findType(typeSelector.types.byId, exerciseSelector.exercises.byId[data].typeId)}</div>
            </div>
            <div>{findTarget(exerciseSelector.exercises.byId[data].mainTarget)}</div>
            <div>{findTarget(exerciseSelector.exercises.byId[data].secondaryTarget)}</div>
          </div>
        ))}
      </S.routineEdtDataBox>
      <S.routineAddBtn>루틴 생성</S.routineAddBtn>
    </S.routineEditPageConatiner>
  )
}

export default RoutineEdit
