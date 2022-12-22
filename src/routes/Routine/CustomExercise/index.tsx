import { ChangeEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import CustomSelectorBtn from '../../../components/CustomSelectorBtn'
import Modal from '../../../components/Modal'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { editCustomExercise, getExerciseData, setCustomExercise } from '../../../states/exercise'
import { editType, getTypesData, setType } from '../../../states/types'
import { IExerciseItem } from '../../../types/exercises.d'
import { findCategory, findTarget, findType } from '../../../utils/findmenu'
import * as S from './styles'

const EDIT_URL = '/routine/routine-make/custom-exercise/edit'

const CustomExercise = () => {
  const { pathname, state } = useLocation() as { pathname: string; state: string }
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
  const [customExerciseData, setCustomExerciseData] = useState<IExerciseItem>(
    pathname === EDIT_URL ? exercisesSelector.exercises.byId[state] : INIT_CUSTOMDATA
  )
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

  const addCustomExerciseDispatchHandler = () => {
    const newTypeData = {
      [`type${typesSelector.types.allIds.length + 1}`]: {
        name: customExerciseData.typeId,
      },
    }
    dispatch(setType(newTypeData))
    const newCustomExeciseData = {
      ...customExerciseData,
      typeId: `type${typesSelector.types.allIds.length + 1}`,
    }
    dispatch(setCustomExercise(newCustomExeciseData))
    navigate(-1)
  }

  const editCustomExerciseDispatchHandler = () => {
    const typeDataToEdit = {
      name: customExerciseData.typeId,
      typeId: exercisesSelector.exercises.byId[state].typeId,
    }
    const customDataToEdit = {
      ...customExerciseData,
      typeId: exercisesSelector.exercises.byId[state].typeId,
    }
    dispatch(editType(typeDataToEdit))
    dispatch(editCustomExercise(customDataToEdit))
    navigate(-1)
  }

  if (state && exercisesSelector.exercises.byId[state].typeId === typeId) {
    const setDataToEdit = {
      ...exercisesSelector.exercises.byId[state],
      typeId: findType(typesSelector.types.byId, typeId),
    }
    setCustomExerciseData(setDataToEdit)
  }

  return (
    <S.customPageConatiner>
      <S.customTitleBox>
        <button onClick={backPageRouter} type='button'>
          <Arrow />
        </button>
        {state ? <div>커스텀 운동 변경 하기</div> : <div>커스텀 운동 추가 하기</div>}
      </S.customTitleBox>
      <S.cutomDataBox>
        <S.customInput inputValue={typeId === ''}>
          <input
            defaultValue={customExerciseData.typeId}
            onChange={customInputChange}
            name='typeId'
            placeholder='운동 이름을 입력해주세요!'
          />
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
        {state ? (
          <S.customExerciseAddBtn
            disabled={compareCustomData}
            onClick={editCustomExerciseDispatchHandler}
            type='button'
          >
            운동 변경
          </S.customExerciseAddBtn>
        ) : (
          <S.customExerciseAddBtn disabled={compareCustomData} onClick={addCustomExerciseDispatchHandler} type='button'>
            운동 추가
          </S.customExerciseAddBtn>
        )}
      </div>
      {toggleModal && (
        <Modal
          stateData={customExerciseData}
          setStateData={setCustomExerciseData}
          stateTypeName={nameFilter}
          modalName='customExercise'
          toggleModalHandler={toggleModalHandler}
        />
      )}
    </S.customPageConatiner>
  )
}

export default CustomExercise
