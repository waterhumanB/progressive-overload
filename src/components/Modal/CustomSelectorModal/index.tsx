import React from 'react'
import { ICustomSelectorModalProps } from '../../../types/allProps.d'

const CustomSelectorModal = ({ toggleModalHandler }: ICustomSelectorModalProps) => {
  const selectorData = () => {
    toggleModalHandler()
  }

  return (
    <div>
      <div>CustomSelector</div>
      <button type='button' onClick={selectorData}>
        Toggle
      </button>
    </div>
  )
}

export default CustomSelectorModal
