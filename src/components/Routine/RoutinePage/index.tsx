import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getExerciseData } from '../../../states/exercises'
import { getTypesData } from '../../../states/types'
import { IRoutinePageProps } from '../../../types/allProps.d'
import { findCategory, findTarget, findType } from '../../../utils/findMenu'
import * as S from './styles'

const RoutinePage = ({
  title,
  routineName,
  placeholder,
  locationState,
  bottomTwoBtn,
  disabled,
  btnValue,
  twoBtnValue1,
  twoBtnValue2,
  backPageHandler,
  routineNameHandler,
  editExerciseHandler,
  editRoutineHandler,
  addRoutineHandler,
}: IRoutinePageProps) => {
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)
  return (
    <S.routinePageContainer>
      <S.routineTitleBox>
        <button onClick={backPageHandler} type='button'>
          <Arrow />
        </button>
        <div>{title}</div>
      </S.routineTitleBox>
      <S.routineDataBox>
        <S.routineInput inputValue={!routineName}>
          <input value={routineName} onChange={routineNameHandler} placeholder={placeholder} />
        </S.routineInput>
        <S.exerciseBox>
          {locationState.workout.map((data) => (
            <S.exerciseCard key={data}>
              <S.mainTarget>{findTarget(exerciseSelector.exercises.byId[data].mainTarget)}</S.mainTarget>
              <S.exerciseInfo>
                <S.exerciseTitle>
                  <div>{findCategory(exerciseSelector.exercises.byId[data].categoryId)}</div>
                  <div>{findType(typeSelector.types.byId, exerciseSelector.exercises.byId[data].typeId)}</div>
                </S.exerciseTitle>
              </S.exerciseInfo>
            </S.exerciseCard>
          ))}
        </S.exerciseBox>
      </S.routineDataBox>
      <S.btnBox>
        {!bottomTwoBtn ? (
          <S.editBtnBox>
            <S.exerciseEditBtn onClick={editExerciseHandler}>{twoBtnValue1}</S.exerciseEditBtn>
            <S.routineEditBtn disabled={!disabled} onClick={editRoutineHandler}>
              {twoBtnValue2}
            </S.routineEditBtn>
          </S.editBtnBox>
        ) : (
          <S.routineAddBtn disabled={!disabled} onClick={addRoutineHandler}>
            {btnValue}
          </S.routineAddBtn>
        )}
      </S.btnBox>
    </S.routinePageContainer>
  )
}

export default RoutinePage
