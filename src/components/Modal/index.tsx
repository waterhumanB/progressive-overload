import React from 'react'
import { IModalProps } from '../../types/allProps.d'
import CustomSelectorModal from './CustomSelectorModal'
import * as S from './styles'

const Modal = ({
  toggleModalHandler,
  customExerciseData,
  modalName,
  nameFitler,
  setCustomExerciseData,
}: IModalProps) => {
  return (
    <S.modalCotainer>
      {modalName === 'customExercise' ? (
        <CustomSelectorModal
          customExerciseData={customExerciseData}
          setCustomExerciseData={setCustomExerciseData}
          nameFitler={nameFitler}
          toggleModalHandler={toggleModalHandler}
        />
      ) : (
        <div>모달창</div>
      )}
    </S.modalCotainer>
  )
}

export default Modal
