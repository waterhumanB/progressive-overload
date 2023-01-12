import { ForwardedRef } from 'react'
import { YoutubeState } from '../states/youtubeRecommend'
import { IRoutineItem } from './routines.d'

export interface IUserInputProps {
  label: string
  name: string
  type: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  vail: boolean
  warning: string
  desc1?: string
  desc2?: string
}

export interface IFilterBtnProps {
  value: string
  data?: string
  id?: string
  name?: string
  className?: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export interface IExerciseCardProps {
  toggleDropDown: () => void
  cardRef: ForwardedRef<HTMLDivElement>
  searchExercise: string
  filterExercise: {
    more: string
    target: string
    category: string
  }
  addExercise: string[]
  setAddExercise: Dispatch<SetStateAction<string[]>>
  setCustomExerciseEditId?: Dispatch<SetStateAction<string>>
}

export interface IYoutubeProps {
  categoryIndex: number
  youtubeData: YoutubeState
}

export interface ExerciseMeunProps {
  setFilterExercise: Dispatch<SetStateAction<object>>
  filterExercise: {
    more: string
    target: string
    category: string
  }
}

export interface IDropDownToggleProps {
  toggleDropDown: () => void
}

export interface IDropDownPropsProps {
  toggleDropDown: () => void
  deleteFunction?: () => void
  dropDown: boolean
  naviRoute: {
    to: string
    state?: object
  }
  twoMenu?: boolean
  twoMenuValue1?: string
  twoMenuValue2?: string
  threeMenu?: boolean
  threeMenuValue1?: string
  threeMenuValue2?: string
  threeMenuValue3?: string
}

export interface IModalProps {
  toggleModalHandler: () => void
  modalName: string
  stateTypeName: string
  stateData: object | Array
  setStateData: Dispatch<SetStateAction<object | Array>>
}

export interface ICustomSelectorModalProps {
  nameFitler: string
  toggleModalHandler: () => void
  customExerciseData: object
  setCustomExerciseData: Dispatch<SetStateAction<object>>
}

export interface ICustomSelectorBtnProps {
  value: string
  name: string
  toggleModalHandler: () => void
  setNameFilter: Dispatch<SetStateAction<string>>
}

export interface IRoutinePageProps {
  backPageHandler: () => void
  title: string
  routineName: string
  routineNameHandler: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  locationState: IRoutineItem
  bottomTwoBtn: boolean
  editExerciseHanlder?: () => void
  editRoutineHandler?: () => void
  addRoutineHandler?: () => void
  disabled?: string
  btnValue?: string
  twoBtnValue1?: string
  twoBtnValue2?: string
}

export interface IExerciseEditDeleteModalProps {
  toggleModalHandler: () => void
  nowExerciseIdData: string
  setnowExerciseIdData: Dispatch<SetStateAction<string>>
}

export interface IRoutineSetData {
  order: number
  kg: number
  rab: number
  finish: boolean
}

export interface IRoutineRecardSetProps {
  toggleModalHandler: () => void
  setRecordSet: Dispatch<SetStateAction<IRoutineSetData[]>>
  recordSet: IRoutineSetData[]
  seconds: number
}

export interface IRoutineSecondsProps {
  setSeconds: Dispatch<SetStateAction<number>>
  seconds: number
}

export interface ITimerModalProps {
  toggleModalHandler: () => void
  seconds: number
  setSeconds: Dispatch<SetStateAction<number>>
}

export interface IRoutineRunRecordBtnProps {
  recordSet: IRoutineSetData[]
  setRecordSet: Dispatch<SetStateAction<IRoutineSetData[]>>
  nowExercise: string[]
  runExerciseOrder: number
  setRunExerciseOrder: Dispatch<React.SetStateAction<number>>
  exerciseRemainder: number
  currentExerciseData: {
    id: string
  }
  currentRoutine: string
}

export interface ICalendarItemProps {
  fetchedWeeks: (weekOrdr: number) => ICalendarItem[] | any
  dataSelector: boolean
}

export interface ICalendarItem {
  day: number
  routine: IRoutineItem[]
  currentMonthOfDate: boolean
}

export interface ICalendarCardProps {
  currentMonthsRoutineData: IRoutineItem[] | any
}
