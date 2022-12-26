import React, { DragEvent, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { ReactComponent as DotMenu } from '../../../assets/imgs/dot_menu.svg'
import Modal from '../../../components/Modal'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getExerciseData } from '../../../states/exercise'
import { getRoutineData } from '../../../states/routines'
import { getTypesData } from '../../../states/types'
import { findCategory, findTarget, findType } from '../../../utils/findmenu'
import * as S from './styles'

interface ILocationState {
  id: string
  title: string
  workout: string[]
  recent: string[]
}

const RoutineReady = () => {
  const location = useLocation() as { state: ILocationState }
  const navigate = useNavigate()
  const exerciseSelector = useAppSelector(getExerciseData)
  const typeSelector = useAppSelector(getTypesData)
  const routineSelector = useAppSelector(getRoutineData)
  const [grab, setGrab] = useState<HTMLElement>()
  const [routineList, setRoutineList] = useState<string[]>(location.state.workout)
  const [dragOver, setDragOver] = useState<number>()
  const [dropPostion, setDropPostion] = useState<number>()
  const [toggleModal, setToggleModal] = useState(false)
  const [routineIdAndExerciseId, setRoutineIdAndExerciseId] = useState<string[]>([])

  const backPageRouter = () => {
    navigate(-1)
  }
  const toggleModalHandler = () => {
    setToggleModal(!toggleModal)
  }
  const routineIdAndExerciseIdHanlder = (exerciseId: string) => {
    setRoutineIdAndExerciseId([location.state.id, exerciseId])
    setToggleModal(!toggleModal)
  }
  const dragStartHandler = (e: DragEvent<HTMLElement>) => {
    // 사용자가 객체를 드래그할때 발생하는 이벤트
    setGrab(e.currentTarget)
    e.dataTransfer.effectAllowed = 'move'
  }

  const dragOverHandler = (e: DragEvent<HTMLElement>) => {
    // 드래그하면서 마우스가 대상 객체의 위에 자리 잡고 있을 때 발생함
    e.preventDefault()
    setDragOver(Number(e.currentTarget.dataset.position))
    setDropPostion(999)
  }

  const dragEndHandler = (e: DragEvent<HTMLElement>) => {
    // 대상 객체를 드래그하다가 마우스 버튼을 놓는 순간 발생함
    e.dataTransfer.dropEffect = 'move'
    setGrab(undefined)
    setDragOver(999)
  }

  const dropHandler = (e: DragEvent<HTMLElement>) => {
    // 요소나 텍스트 블록을 적합한 드롭 대상에 드롭했을 때 발생함
    const grabPosition = Number(grab?.dataset.position)
    const targetPosition = Number(e.currentTarget.dataset.position)

    const newList = [...routineList]
    newList[grabPosition] = newList.splice(targetPosition, 1, newList[grabPosition])[0]
    setRoutineList(newList)
    setDropPostion(targetPosition)
  }

  useEffect(() => {
    setRoutineList(routineSelector.routines.byId[location.state.id].workout)
  }, [routineSelector])
  return (
    <S.routinePageConatiner>
      <S.routineTitleBox>
        <button onClick={backPageRouter} type='button'>
          <Arrow />
        </button>
        <div>{location.state.title}</div>
      </S.routineTitleBox>
      <S.routineDataBox>
        <S.exerciseBox>
          {routineList.map((data, index) => (
            <S.exerciseCard
              dropPosition={index === dropPostion}
              dragOverPosition={index === dragOver}
              data-position={index}
              onDragStart={dragStartHandler}
              onDragOver={dragOverHandler}
              onDragEnd={dragEndHandler}
              onDrop={dropHandler}
              draggable
              key={data}
            >
              <S.mainTaget>{findTarget(exerciseSelector.exercises.byId[data].mainTarget)}</S.mainTaget>
              <S.exerciseInfo>
                <S.exerciseTitle>
                  <div>{findCategory(exerciseSelector.exercises.byId[data].categoryId)}</div>
                  <div>{findType(typeSelector.types.byId, exerciseSelector.exercises.byId[data].typeId)}</div>
                </S.exerciseTitle>
                <S.exerciseTarget>
                  <div>{findTarget(exerciseSelector.exercises.byId[data].mainTarget)}</div>
                  <div>
                    {exerciseSelector.exercises.byId[data].secondaryTarget !== '' &&
                      findTarget(exerciseSelector.exercises.byId[data].secondaryTarget)}
                  </div>
                </S.exerciseTarget>
              </S.exerciseInfo>
              <S.routineMenuBtn onClick={() => routineIdAndExerciseIdHanlder(data)}>
                <DotMenu />
              </S.routineMenuBtn>
            </S.exerciseCard>
          ))}
        </S.exerciseBox>
      </S.routineDataBox>
      <S.routineStartBtn>루틴 시작하기</S.routineStartBtn>
      {toggleModal && (
        <Modal
          toggleModalHandler={toggleModalHandler}
          modalName='exerciseEditDelete'
          stateTypeName=''
          stateData={routineIdAndExerciseId}
          setStateData={setRoutineIdAndExerciseId}
        />
      )}
    </S.routinePageConatiner>
  )
}

export default RoutineReady
