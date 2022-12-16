import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import CustomSelectorBtn from '../../../components/CustomSelectorBtn'
import Modal from '../../../components/Modal'
import * as S from './styles'

const INIT_CUSTOMDATA = { name: '', category: '카테고리', mainTarget: '주요 타겟', secondTarget: '보조 타겟' }

const CustomExercise = () => {
  const navigate = useNavigate()
  const [toggleModal, setToggleModal] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [customExerciseData, setCustomExerciseData] = useState<object>(INIT_CUSTOMDATA)
  const customExerciseDataValues = Object.values(customExerciseData)

  const backPageRouter = () => {
    navigate(-1)
  }

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal)
  }

  const customInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const customData = {
      [e.currentTarget.name]: e.currentTarget.value,
    }
    setCustomExerciseData({ ...customExerciseData, ...customData })
  }

  const compareCustomData =
    customExerciseDataValues[0] === '' ||
    customExerciseDataValues[1] === '카테고리' ||
    customExerciseDataValues[2] === '주요 타겟' ||
    customExerciseDataValues[3] === '보조 타겟'

  const customExerciseDispatch = () => {
    console.log(customExerciseData)
  }
  return (
    <S.customPageConatiner>
      <S.customTitleBox>
        <button onClick={backPageRouter} type='button'>
          <Arrow />
        </button>
        <div>커스텀 운동 추가 하기</div>
      </S.customTitleBox>
      <S.cutomDataBox>
        <S.customInput inputValue={customExerciseDataValues[0] === ''}>
          <input onChange={customInputChange} name='name' placeholder='운동 이름을 입력해주세요!' />
        </S.customInput>
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='category'
          value={customExerciseDataValues[1] === '카테고리' ? '카테고리' : customExerciseDataValues[1]}
          toggleModalHandler={toggleModalHandler}
        />
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='mainTarget'
          value={customExerciseDataValues[2] === '주요 타겟' ? '주요 타겟' : customExerciseDataValues[2]}
          toggleModalHandler={toggleModalHandler}
        />
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='secondTarget'
          value={customExerciseDataValues[3] === '보조 타겟' ? '보조 타겟' : customExerciseDataValues[3]}
          toggleModalHandler={toggleModalHandler}
        />
      </S.cutomDataBox>
      <div>
        <S.customExerciseAddBtn disabled={compareCustomData} onClick={customExerciseDispatch} type='button'>
          운동 추가
        </S.customExerciseAddBtn>
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
