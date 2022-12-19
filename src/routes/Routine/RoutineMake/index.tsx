import * as S from './styles'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { ChangeEvent, useState } from 'react'
import ExerciseMenu from '../../../components/ExerciseMenu'
import ExerciseCard from '../../../components/ExerciseCard'
import { useNavigate } from 'react-router-dom'
import DropDown from '../../../components/DropDown'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { deleteCustomExercise, getExerciseData } from '../../../states/exercise'
import { deleteType, getTypesData } from '../../../states/types'

interface InitData {
  more: string
  target: string
  category: string
}

const INIT_DATA: InitData = { more: '전체', target: '전체', category: '전체' }

const RoutineMake = () => {
  const [addExercise, setAddExercise] = useState<string[]>([])
  const [customExerciseEditId, setCustomExerciseEditId] = useState<string>('')
  const [filterExercise, setFilterExercise] = useState<InitData>(INIT_DATA)
  const [searchExercise, setSearchExercise] = useState<string>('')
  const [dropDown, setDropDown] = useState(false)
  const exerciseSeleter = useAppSelector(getExerciseData)
  const typeSeleter = useAppSelector(getTypesData)
  const dispatch = useAppDispatch()
  const toggleDropDown = () => {
    setDropDown(!dropDown)
  }
  const navigate = useNavigate()

  const searchHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchExercise(e.currentTarget.value)
  }

  const customExerciseRouter = () => {
    navigate('./custom-exercise')
  }
  const naviRouteState = {
    to: './custom-exercise/edit',
    state: {
      state: customExerciseEditId,
    },
  }

  const deleteCustomExerciseHandler = () => {
    const deleteTypeData = {
      typeId: exerciseSeleter.exercises.byId[customExerciseEditId].typeId,
      name: typeSeleter.types.byId[exerciseSeleter.exercises.byId[customExerciseEditId].typeId].name,
    }
    dispatch(deleteCustomExercise(exerciseSeleter.exercises.byId[customExerciseEditId]))
    dispatch(deleteType(deleteTypeData))
  }

  return (
    <S.makeRountineContainer>
      <S.filterBox>
        <Arrow />
        <input placeholder='운동 이름 검색' onChange={searchHandleChange} />
      </S.filterBox>
      <ExerciseMenu filterExercise={filterExercise} setFilterExercise={setFilterExercise} />
      <S.addBtnBox onClick={customExerciseRouter}>
        <S.addBtn>+</S.addBtn>
        <span>커스텀 운동 추가</span>
      </S.addBtnBox>
      <ExerciseCard
        addExercise={addExercise}
        setAddExercise={setAddExercise}
        setCustomExerciseEditId={setCustomExerciseEditId}
        toggleDropDown={toggleDropDown}
        filterExercise={filterExercise}
        searchExercise={searchExercise}
      />
      <div>위로 올라가기</div>
      <div> + {addExercise.length === 12 ? 'MAX' : addExercise.length} 운동 추가하기</div>
      <DropDown
        threeMenu
        threeMenuValue1='커스텀 변경하기'
        threeMenuValue2='커스텀 삭제하기'
        threeMenuValue3='취소'
        deleteFuction={deleteCustomExerciseHandler}
        toggleDropDown={toggleDropDown}
        dropDown={dropDown}
        naviRoute={naviRouteState}
      />
    </S.makeRountineContainer>
  )
}

export default RoutineMake
