import React, { useState, MouseEvent } from 'react'
import * as S from './styles'
import { ReactComponent as Arrow } from '../../assets/imgs/arrow.svg'
import UserInfo from '../../components/UserInfo'

const Home = () => {
  const [view, setView] = useState(0)
  const [btn, setBtn] = useState('')
  const viewHadlerBtn = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === 'left') {
      setBtn('left')
      setView((prev) => {
        return prev >= 1 ? prev - 1 : prev
      })
    }
    if (e.currentTarget.id === 'right') {
      setBtn('right')
      setView((prev) => {
        return prev < 3 ? prev + 1 : prev
      })
    }
  }

  return (
    <S.HomeContainer>
      <S.DecContainer>
        <S.pageBtn type='button' id='left' onClick={viewHadlerBtn}>
          <Arrow className='left' />
        </S.pageBtn>
        {view === 0 && (
          <S.DecBox view={btn}>
            <span>
              나만의 운동 루틴을 만들어 <br /> 체계적으로 운동하세요!
            </span>
          </S.DecBox>
        )}
        {view === 1 && (
          <S.DecBox view={btn}>
            <span>
              나의 운동 볼륨과 기록들을 <br />볼 수 있습니다.
            </span>
          </S.DecBox>
        )}
        {view === 2 && (
          <S.DecBox view={btn}>
            <span className='start'>이제 저와 함께 운동해 볼까요?</span>
          </S.DecBox>
        )}
        {view === 3 && (
          <S.DecBox view={btn}>
            <UserInfo />
          </S.DecBox>
        )}
        <S.pageBtn type='button' id='right' onClick={viewHadlerBtn}>
          <Arrow className='right' />
        </S.pageBtn>
      </S.DecContainer>
      <S.OrderBox>
        <S.OrderZero view={view} />
        <S.OrderOne view={view} />
        <S.OrderTwo view={view} />
        <S.OrderThr view={view} />
      </S.OrderBox>
    </S.HomeContainer>
  )
}

export default Home
