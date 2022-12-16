import React, { MouseEvent } from 'react'
import { initialData } from '../../../data/initialData'
import { ICustomSelectorModalProps } from '../../../types/allProps.d'
import * as S from './styles'

const category = Object.values(initialData.category.byId)
const mainTarget = Object.values(initialData.targets.byId)
const secondTarget = Object.values(initialData.targets.byId)

const CustomSelectorModal = ({
  toggleModalHandler,
  nameFitler,
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
      {(nameFitler === 'category' &&
        category.map((data) => (
          <div key={data.name}>
            <button name='category' value={data.name} onClick={selectorData} type='button'>
              {data.name}
            </button>
          </div>
        ))) ||
        (nameFitler === 'mainTarget' &&
          mainTarget.map((data) => (
            <div key={data.name}>
              <button name='mainTarget' value={data.name} onClick={selectorData} type='button'>
                {data.name}
              </button>
            </div>
          ))) ||
        (nameFitler === 'secondTarget' &&
          secondTarget.map((data) => (
            <div key={data.name}>
              <button name='secondTarget' value={data.name} onClick={selectorData} type='button'>
                {data.name}
              </button>
            </div>
          )))}
      {nameFitler === 'secondTarget' && (
        <button name='secondTarget' value='없음' type='button' onClick={selectorData}>
          없음
        </button>
      )}
    </S.customSelectorModalContainer>
  )
}

export default CustomSelectorModal
