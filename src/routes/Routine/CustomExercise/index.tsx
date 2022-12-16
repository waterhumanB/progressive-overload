import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import CustomSelectorBtn from '../../../components/CustomSelectorBtn'
import Modal from '../../../components/Modal'
import * as S from './styles'

const CustomExercise = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [customExerciseData, setCustomExerciseData] = useState<object>({})
  const navigate = useNavigate()

  const backPageRouter = () => {
    navigate(-1)
  }

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal)
  }
  const customExerciseDataValues = Object.values(customExerciseData)

  return (
    <S.customPageConatiner>
      <S.customTitleBox>
        <button onClick={backPageRouter} type='button'>
          <Arrow />
        </button>
        <div>커스텀 운동 추가 하기</div>
      </S.customTitleBox>
      <S.cutomDataBox>
        <S.customInput>
          <input placeholder='운동 이름을 입력해주세요!' />
        </S.customInput>
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='category'
          value={customExerciseDataValues.length === 0 ? '카테고리' : customExerciseDataValues[0]}
          toggleModalHandler={toggleModalHandler}
        />
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='mainTarget'
          value={customExerciseDataValues.length <= 1 ? '주요 타겟' : customExerciseDataValues[1]}
          toggleModalHandler={toggleModalHandler}
        />
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='secondTarget'
          value={customExerciseDataValues.length <= 2 ? '보조 타겟' : customExerciseDataValues[2]}
          toggleModalHandler={toggleModalHandler}
        />
      </S.cutomDataBox>
      <div>
        <button type='button'>운동 추가</button>
      </div>
      {toggleModal && (
        <Modal
          customExerciseData={customExerciseData}
          setCustomExerciseData={setCustomExerciseData}
          nameFitler={nameFilter}
          modalName='customExercise'
          toggleModalHandler={toggleModalHandler}
        />
      )}
    </S.customPageConatiner>
  )
}

export default CustomExercise
