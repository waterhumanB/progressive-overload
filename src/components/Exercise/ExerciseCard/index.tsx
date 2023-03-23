import * as S from './styles'
import { ReactComponent as Arm } from '../../../assets/imgs/arm.svg'
import { ReactComponent as ArmHeart } from '../../../assets/imgs/arm_heart.svg'
import { ReactComponent as DotMenu } from '../../../assets/imgs/dot_menu.svg'
import { ReactComponent as Check } from '../../../assets/imgs/check.svg'
import { useCallback } from 'react'
import { getExerciseData, setFavoriteExercise } from '../../../states/exercises'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { findCategory, findTarget, findType } from '../../../utils/findMenu'
import { IExerciseCardProps } from '../../../types/allProps.d'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getTypesData } from '../../../states/types'
import { IExerciseItem } from '../../../types/exercises.d'

const ExerciseCard = ({
  searchExercise,
  filterExercise,
  toggleDropDown,
  setCustomExerciseEditId,
  setAddExercise,
  addExercise,
  cardRef,
}: IExerciseCardProps) => {
  const exerciseSelector = useAppSelector(getExerciseData)
  const typesSelector = useAppSelector(getTypesData)
  const dispatch = useAppDispatch()
  const stateArray: IExerciseItem[] = Object.values(exerciseSelector.exercises.byId)
  const { more, target, category } = filterExercise

  const fetchedData = stateArray
    .filter(
      (data) =>
        ((more === '전체' && data) ||
          (more === 'favorite' && data.favorite) ||
          (more === 'record' && data.record.length) ||
          (more === 'custom' && data.custom)) &&
        (target === '전체' ? data : data.mainTarget === target) &&
        (category === '전체' ? data : data.categoryId === category)
    )
    .filter((data) => {
      const title = findCategory(data.categoryId) + findType(typesSelector.types.byId, data.typeId)
      return title.includes(searchExercise)
    })

  const favoriteHandler = useCallback((id: string, favorite: boolean) => {
    const favoriteDataToDispatch = {
      id,
      favorite: !favorite,
    }
    dispatch(setFavoriteExercise(favoriteDataToDispatch))
  }, [])

  const addExerciseHandler = useCallback(
    (id: string) => {
      if (addExercise.length < 12) {
        setAddExercise([...addExercise, id])
      }
      if (addExercise.includes(id)) {
        setAddExercise(
          addExercise.filter((ele) => {
            return ele !== id
          })
        )
      }
    },
    [addExercise]
  )
  const dropDownAndEditIdHandler = useCallback((exId: string, typeId: string) => {
    const exerciseIdAndTypeId = {
      id: exId,
      typeId,
    }
    toggleDropDown()
    setCustomExerciseEditId(exerciseIdAndTypeId)
  }, [])
  return (
    <S.exerciseContainer>
      {fetchedData.length !== 0 ? (
        fetchedData.map((data) => (
          <S.exerciseBox border={addExercise.includes(data.id)} key={data.id}>
            {fetchedData[0].id === data.id && <S.refDiv ref={cardRef} />}
            <S.mainTarget>{addExercise.includes(data.id) ? <Check /> : findTarget(data.mainTarget)}</S.mainTarget>
            <S.exerciseInfo type='button' onClick={() => addExerciseHandler(data.id)}>
              <S.exerciseTitle>
                <div>{findCategory(data.categoryId)}</div>
                <div>{findType(typesSelector.types.byId, data.typeId)}</div>
              </S.exerciseTitle>
              <S.exerciseTarget>
                <div>{findTarget(data.mainTarget)}</div>
                <div>{data.secondaryTarget !== '' && findTarget(data.secondaryTarget)}</div>
              </S.exerciseTarget>
            </S.exerciseInfo>
            {data.custom ? (
              <S.editBtn onClick={() => dropDownAndEditIdHandler(data.id, data.typeId)} type='button'>
                <DotMenu />
              </S.editBtn>
            ) : (
              <S.favoriteBtn onClick={() => favoriteHandler(data.id, data.favorite)} type='button'>
                {data.favorite === true ? <ArmHeart /> : <Arm />}
              </S.favoriteBtn>
            )}
          </S.exerciseBox>
        ))
      ) : (
        <S.errorFetchedData>해당 운동은 없습니다.</S.errorFetchedData>
      )}
    </S.exerciseContainer>
  )
}

export default ExerciseCard
