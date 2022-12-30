import { ChangeEvent, useState } from 'react'
import { ReactComponent as Check } from '../../assets/imgs/check.svg'
import * as S from './styles'

interface IRoutineSetData {
  order: number
  kg: number
  rab: number
  finish: boolean
}

const INIT_DATA = [
  {
    order: 1,
    kg: 0,
    rab: 0,
    finish: false,
  },
]

const RoutineRecordSet = () => {
  const [recordSet, setRecordSet] = useState<IRoutineSetData[]>(INIT_DATA)

  const recordKgHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    if (Number(value) >= 0 && Number(value) <= 300) {
      setRecordSet(recordSet.map((data) => (data.order === Number(name) ? { ...data, kg: Number(value) } : data)))
    }
  }
  const recordRabHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    if (Number(value) >= 0 && Number(value) <= 100) {
      setRecordSet(recordSet.map((data) => (data.order === Number(name) ? { ...data, rab: Number(value) } : data)))
    }
  }

  const recondFinishHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget
    setRecordSet(recordSet.map((data) => (data.order === Number(name) ? { ...data, finish: checked } : data)))
  }

  return (
    <S.routineRecordSetContainer>
      {recordSet.map((data) => (
        <S.routineRecordSetBox key={data.order}>
          <div>{data.order}</div>
          <S.routineKgRabInput
            name={String(data.order)}
            range={data.kg}
            onChange={recordKgHandleChange}
            value={data.kg}
          />
          <S.routineKgRabInput
            name={String(data.order)}
            range={data.rab}
            onChange={recordRabHandleChange}
            value={data.rab}
          />
          <S.routineFinishBox checked={data.finish}>
            <input
              name={String(data.order)}
              onChange={recondFinishHandleChange}
              type='checkbox'
              checked={data.finish}
            />
            <Check />
          </S.routineFinishBox>
        </S.routineRecordSetBox>
      ))}
    </S.routineRecordSetContainer>
  )
}

export default RoutineRecordSet
