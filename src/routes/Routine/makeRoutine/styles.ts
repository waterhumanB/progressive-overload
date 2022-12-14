import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const makeRountineContainer = styled.section`
  width: 100%;
  padding: 10px 15px;
`
export const filterBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.BACK};
  background: ${colors.BACK};
  margin-bottom: 15px;
  svg {
    width: 24px;
    height: 35px;
  }
  input {
    width: 90%;
  }
`
