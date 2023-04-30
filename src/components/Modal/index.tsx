import { IModalProps } from '../../types/allProps.d'
import CustomSelectorModal from './CustomSelectorModal'
import ExerciseEditDeleteModal from './ExerciseEditDeleteModal'
import * as S from './styles'
import TimerModal from './TimerModal'

const Modal = ({ toggleModalHandler, stateData, setStateData, modalName, stateTypeName }: IModalProps) => {
  return (
    <S.modalCotainer>
      {modalName === 'customExercise' && (
        <CustomSelectorModal
          customExerciseData={stateData}
          setCustomExerciseData={setStateData}
          nameFilter={stateTypeName}
          toggleModalHandler={toggleModalHandler}
        />
      )}
      {modalName === 'exerciseEditDelete' && (
        <ExerciseEditDeleteModal
          toggleModalHandler={toggleModalHandler}
          nowExerciseIdData={stateData}
          setNowExerciseIdData={setStateData}
        />
      )}
      {modalName === 'timer' && (
        <TimerModal toggleModalHandler={toggleModalHandler} seconds={stateData} setSeconds={setStateData} />
      )}
    </S.modalCotainer>
  )
}

export default Modal
