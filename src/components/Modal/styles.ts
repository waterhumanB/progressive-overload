import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const modalCotainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colors.GRAY};
  background-color: rgba(0, 0, 0, 0.2);
`
