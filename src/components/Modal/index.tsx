import React from 'react'
import { IModalProps } from '../../types/allProps.d'
import CustomSelectorModal from './CustomSelectorModal'
import * as S from './styles'

const Modal = ({ toggleModalHandler, modalName }: IModalProps) => {
  return (
    <S.modalCotainer>
      {modalName === 'customExercise' ? (
        <CustomSelectorModal toggleModalHandler={toggleModalHandler} />
      ) : (
        <div>모달창</div>
      )}
    </S.modalCotainer>
  )
}

export default Modal
