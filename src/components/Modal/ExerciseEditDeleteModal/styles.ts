import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const exerciseEditDeleteModalContainer = styled.div`
  width: 300px;
  background: ${colors.BACK};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const exerciseEditDeleteTitle = styled.div`
  width: 100%;
  font-size: 20px;
  padding: 20px;
  color: ${colors.FOCUS};
  border: 1px solid ${colors.FONT};
  border-bottom: 0;
`

export const exerciseEditDeleteBtnBox = styled.div`
  width: 100%;
  display: flex;

  button:first-child {
    border-right: 0;
  }
  button {
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: ${colors.FOCUS};
    border: 1px solid ${colors.FONT};

    :hover {
      font-weight: 600;
      color: ${colors.WHITE};
      background: ${colors.FOCUS};
      border: 1px solid ${colors.FOCUS};
    }
  }
`
