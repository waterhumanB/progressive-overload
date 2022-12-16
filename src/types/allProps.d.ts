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

export interface IDropDownToggleProps {
  toggleDropDown: () => void
}

export interface IFiterDataProps {
  searchExercise: string
  filterExercise: object
}

export interface IYoutubeIndexProps {
  categoryIndex: number
}

export interface ExerciseMeunProps {
  setFilterExercise: Dispatch<SetStateAction<object>>
  filterExercise: object
}

export interface IDropDownPropsProps {
  toggleDropDown: () => void
  dropDown: boolean
}

export interface IModalProps {
  toggleModalHandler: () => void
  modalName: string
  nameFitler: string
  customExerciseData: object
  setCustomExerciseData: Dispatch<SetStateAction<object>>
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
