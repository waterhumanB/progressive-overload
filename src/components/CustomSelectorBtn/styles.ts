import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const customSelector = styled.button<{ selectorName: string }>`
  width: 100%;
  height: 40px;
  background: ${(props) =>
    props.selectorName === '카테고리' || props.selectorName === '주요 타겟' || props.selectorName === '보조 타겟'
      ? colors.WHITE
      : colors.FOCUS};
  border: ${(props) =>
    props.selectorName === '카테고리' || props.selectorName === '주요 타겟' || props.selectorName === '보조 타겟'
      ? `2px solid ${colors.BACK}`
      : `2px solid ${colors.FOCUS}`};
  color: ${(props) =>
    props.selectorName === '카테고리' || props.selectorName === '주요 타겟' || props.selectorName === '보조 타겟'
      ? colors.FOCUS
      : colors.WHITE};
  font-size: 16px;
  margin-bottom: 80px;
  align-items: center;
  display: flex;
  div {
    font-weight: 600;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`
