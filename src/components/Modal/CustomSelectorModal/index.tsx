import { MouseEvent } from 'react'
import { initialData } from '../../../data/initialData'
import { ICustomSelectorModalProps } from '../../../types/allProps.d'
import { findCategory, findTarget } from '../../../utils/findMenu'
import * as S from './styles'

const category = Object.keys(initialData.categories.byId)
const mainTarget = Object.keys(initialData.targets.byId)
const secondaryTarget = Object.keys(initialData.targets.byId)

const CustomSelectorModal = ({
  toggleModalHandler,
  nameFilter,
  setCustomExerciseData,
  customExerciseData,
}: ICustomSelectorModalProps) => {
  const selectorData = (e: MouseEvent<HTMLButtonElement>) => {
    toggleModalHandler()
    const customSelectorExercise = {
      [e.currentTarget.name]: e.currentTarget.value,
    }
    setCustomExerciseData({ ...customExerciseData, ...customSelectorExercise })
  }

  return (
    <S.customSelectorModalContainer>
      {(nameFilter === 'categoryId' &&
        category.map((data) => (
          <div key={data}>
            <button name='categoryId' value={data} onClick={selectorData} type='button'>
              {findCategory(data)}
            </button>
          </div>
        ))) ||
        (nameFilter === 'mainTarget' &&
          mainTarget.map((data) => (
            <div key={data}>
              <button name='mainTarget' value={data} onClick={selectorData} type='button'>
                {findTarget(data)}
              </button>
            </div>
          ))) ||
        (nameFilter === 'secondaryTarget' &&
          secondaryTarget.map((data) => (
            <div key={data}>
              <button name='secondaryTarget' value={data} onClick={selectorData} type='button'>
                {findTarget(data)}
              </button>
            </div>
          )))}
      {nameFilter === 'secondaryTarget' && (
        <button name='secondaryTarget' value='' type='button' onClick={selectorData}>
          없음
        </button>
      )}
    </S.customSelectorModalContainer>
  )
}

export default CustomSelectorModal
