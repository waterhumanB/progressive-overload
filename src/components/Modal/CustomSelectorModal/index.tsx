import React, { MouseEvent } from 'react'
import { initialData } from '../../../data/initialData'
import { ICustomSelectorModalProps } from '../../../types/allProps.d'
import * as S from './styles'

const category = Object.values(initialData.category.byId)
const mainTarget = Object.values(initialData.targets.byId)
const secondaryTarget = Object.values(initialData.targets.byId)

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
      {(nameFitler === 'categoryId' &&
        category.map((data) => (
          <div key={data.name}>
            <button name='categoryId' value={data.name} onClick={selectorData} type='button'>
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
        (nameFitler === 'secondaryTarget' &&
          secondaryTarget.map((data) => (
            <div key={data.name}>
              <button name='secondaryTarget' value={data.name} onClick={selectorData} type='button'>
                {data.name}
              </button>
            </div>
          )))}
      {nameFitler === 'secondaryTarget' && (
        <button name='secondaryTarget' value='없음' type='button' onClick={selectorData}>
          없음
        </button>
      )}
    </S.customSelectorModalContainer>
  )
}

export default CustomSelectorModal
