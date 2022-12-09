import { useDispatch } from 'react-redux'
import { AppDispatch } from '../states'

// instead of plain `useDispatch`
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
