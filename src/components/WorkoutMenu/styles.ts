import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const workoutMenuBox = styled.div`
  width: 100%;
  .more {
    margin-right: 13px;
    color: ${colors.RED};
  }
  .target {
    margin-right: 13px;
    color: ${colors.BLUE};
  }
  .category {
    margin-right: 13px;
    color: ${colors.GREEN};
  }
`

export const filterBtn = styled.button`
  margin: auto 9px 12px auto;
  font-size: 14px;
  font-weight: 600;
`
