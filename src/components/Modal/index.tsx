import { IModalProps } from '../../types/allProps.d'
import CustomSelectorModal from './CustomSelectorModal'
import * as S from './styles'

const Modal = ({ toggleModalHandler, stateData, modalName, stateTypeName, setStateData }: IModalProps) => {
  return (
    <S.modalCotainer>
      {modalName === 'customExercise' && (
        <CustomSelectorModal
          customExerciseData={stateData}
          setCustomExerciseData={setStateData}
          nameFitler={stateTypeName}
          toggleModalHandler={toggleModalHandler}
        />
      )}
    </S.modalCotainer>
  )
}

export default Modal
