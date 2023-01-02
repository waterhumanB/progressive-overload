import { ChangeEvent } from 'react'
import { ReactComponent as Check } from '../../assets/imgs/check.svg'
import { IRoutineRecardSetProps } from '../../types/allProps.d'
import * as S from './styles'

const RoutineRecordSet = ({ recordSet, setRecordSet, toggleModalHandler, seconds }: IRoutineRecardSetProps) => {
  const recordKgHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget
    if (Number(value) >= 0 && Number(value) <= 300) {
      setRecordSet(recordSet.map((data) => (data.order === Number(id) ? { ...data, kg: Number(value) } : data)))
    }
  }
  const recordRabHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget
    if (Number(value) >= 0 && Number(value) <= 100) {
      setRecordSet(recordSet.map((data) => (data.order === Number(id) ? { ...data, rab: Number(value) } : data)))
    }
  }

  const recondFinishHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.currentTarget
    setRecordSet(recordSet.map((data) => (data.order === Number(id) ? { ...data, finish: checked } : data)))
    if (checked && seconds > 0) {
      toggleModalHandler()
    }
  }

  return (
    <S.routineRecordSetContainer>
      {recordSet.map((data) => (
        <S.routineRecordSetBox key={data.order}>
          <div>{data.order}</div>
          <S.routineKgRabInput
            id={String(data.order)}
            range={data.kg}
            onChange={recordKgHandleChange}
            value={data.kg}
          />
          <S.routineKgRabInput
            id={String(data.order)}
            range={data.rab}
            onChange={recordRabHandleChange}
            value={data.rab}
          />
          <S.routineFinishBox checked={data.finish}>
            <input id={String(data.order)} onChange={recondFinishHandleChange} type='checkbox' checked={data.finish} />
            <Check />
          </S.routineFinishBox>
        </S.routineRecordSetBox>
      ))}
    </S.routineRecordSetContainer>
  )
}

export default RoutineRecordSet
