import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import CustomSelectorBtn from '../../../components/CustomSelectorBtn'
import Modal from '../../../components/Modal'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getExerciseData, setCustomExercise } from '../../../states/exercise'
import { ICustomExecise } from '../../../types/exercise.d'
import * as S from './styles'

const CustomExercise = () => {
  const selector = useAppSelector(getExerciseData)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [toggleModal, setToggleModal] = useState(false)
  const [nameFilter, setNameFilter] = useState('')

  const INIT_CUSTOMDATA = {
    typeId: '',
    id: `execise${selector.exercise.allIds.length + 1}`,
    custom: true,
    favorite: false,
    categoryId: '카테고리',
    mainTarget: '주요 타겟',
    secondaryTarget: '보조 타겟',
    record: [],
  }

  const [customExerciseData, setCustomExerciseData] = useState<ICustomExecise>(INIT_CUSTOMDATA)
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
    customExerciseDataValues[4] === '카테고리' ||
    customExerciseDataValues[5] === '주요 타겟' ||
    customExerciseDataValues[6] === '보조 타겟'

  console.log(customExerciseData)
  const customExerciseDispatch = () => {
    dispatch(setCustomExercise(customExerciseData))
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
          <input onChange={customInputChange} name='typeId' placeholder='운동 이름을 입력해주세요!' />
        </S.customInput>
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='categoryId'
          value={customExerciseDataValues[4] === '카테고리' ? '카테고리' : customExerciseDataValues[4]}
          toggleModalHandler={toggleModalHandler}
        />
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='mainTarget'
          value={customExerciseDataValues[5] === '주요 타겟' ? '주요 타겟' : customExerciseDataValues[5]}
          toggleModalHandler={toggleModalHandler}
        />
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='secondaryTarget'
          value={customExerciseDataValues[6] === '보조 타겟' ? '보조 타겟' : customExerciseDataValues[6]}
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
