import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import CustomSelectorBtn from '../../../components/CustomSelectorBtn'
import Modal from '../../../components/Modal'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getExerciseData, setCustomExercise } from '../../../states/exercise'
import { getTypesData, setTypes } from '../../../states/types'
import { IExerciseItem } from '../../../types/exercises.d'
import { findCategory, findTarget } from '../../../utils/findmenu'
import * as S from './styles'

const CustomExercise = () => {
  const exercisesSelector = useAppSelector(getExerciseData)
  const typesSelector = useAppSelector(getTypesData)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [toggleModal, setToggleModal] = useState(false)
  const [nameFilter, setNameFilter] = useState('')

  const INIT_CUSTOMDATA = {
    id: `exercise${exercisesSelector.exercises.allIds.length + 1}`,
    typeId: '',
    categoryId: '카테고리',
    custom: true,
    favorite: false,
    mainTarget: '주요 타겟',
    secondaryTarget: '보조 타겟',
    record: [],
  }

  const [customExerciseData, setCustomExerciseData] = useState<IExerciseItem>(INIT_CUSTOMDATA)
  const { categoryId, mainTarget, secondaryTarget, typeId } = customExerciseData
  const compareCustomData =
    typeId === '' || categoryId === '카테고리' || mainTarget === '주요 타겟' || secondaryTarget === '보조 타겟'

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

  console.log(customExerciseData.typeId)
  console.log(typesSelector)
  const customExerciseDispatch = () => {
    // dispatch(setTypes({typcustomExerciseData.typeId}))
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
        <S.customInput inputValue={typeId === ''}>
          <input onChange={customInputChange} name='typeId' placeholder='운동 이름을 입력해주세요!' />
        </S.customInput>
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='categoryId'
          value={categoryId === '카테고리' ? '카테고리' : findCategory(categoryId)}
          toggleModalHandler={toggleModalHandler}
        />
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='mainTarget'
          value={mainTarget === '주요 타겟' ? '주요 타겟' : findTarget(mainTarget)}
          toggleModalHandler={toggleModalHandler}
        />
        <CustomSelectorBtn
          setNameFilter={setNameFilter}
          name='secondaryTarget'
          value={secondaryTarget === '보조 타겟' ? '보조 타겟' : findTarget(secondaryTarget)}
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
