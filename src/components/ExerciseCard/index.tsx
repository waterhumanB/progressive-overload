import * as S from './styles'
import { ReactComponent as Arm } from '../../assets/imgs/arm.svg'
import { ReactComponent as ArmHeart } from '../../assets/imgs/arm_heart.svg'
import { ReactComponent as DotMenu } from '../../assets/imgs/dot_menu.svg'
import { ReactComponent as Check } from '../../assets/imgs/check.svg'
import { useCallback } from 'react'
import { getExerciseData, setFavoriteExercise } from '../../states/exercise'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { findCategory, findTarget, findType } from '../../utils/findmenu'
import { IExerciseCardProps } from '../../types/allProps.d'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getTypesData } from '../../states/types'
import { IExerciseItem } from '../../types/exercises.d'

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

  const fetechedData = stateArray
    .filter(
      (data) =>
        ((more === '전체' && data) ||
          (more === 'favorite' && data.favorite) ||
          (more === 'recent' && !data.record) ||
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
  const dropDonwAndEditIdHandler = useCallback((exId: string, typeId: string) => {
    const exerciseIdAndTypeId = {
      id: exId,
      typeId,
    }
    toggleDropDown()
    setCustomExerciseEditId(exerciseIdAndTypeId)
  }, [])
  return (
    <S.exerciseContainer>
      {fetechedData.length !== 0 ? (
        fetechedData.map((data) => (
          <S.exerciseBox border={addExercise.includes(data.id)} key={data.id}>
            {fetechedData[0].id === data.id && <S.refDiv ref={cardRef} />}
            <S.mainTaget>{addExercise.includes(data.id) ? <Check /> : findTarget(data.mainTarget)}</S.mainTaget>
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
              <button className='edit' onClick={() => dropDonwAndEditIdHandler(data.id, data.typeId)} type='button'>
                <DotMenu />
              </button>
            ) : (
              <button className='favorite' onClick={() => favoriteHandler(data.id, data.favorite)} type='button'>
                {data.favorite === true ? <ArmHeart /> : <Arm />}
              </button>
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
