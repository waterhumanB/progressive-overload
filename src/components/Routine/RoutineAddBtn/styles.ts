import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const addBtnBox = styled.div`
  width: 100%;
  max-width: 430px;
  bottom: 70px;
  display: flex;
  justify-content: end;
  position: fixed;
`

export const addBtn = styled.button`
  svg {
    width: 80px;
    height: 80px;
    :hover g > :first-child {
      fill: ${colors.FOCUS};
    }
    g > :first-child {
      transition: 0.2s;
    }
  }
`
