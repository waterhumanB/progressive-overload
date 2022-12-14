import { useState, MouseEvent } from 'react'
import * as S from './styles'
import { ReactComponent as Arrow } from '../../assets/imgs/arrow.svg'
import UserInfo from '../../components/UserInfo'

const Home = () => {
  const [view, setView] = useState(0)
  const [btn, setBtn] = useState('')
  const viewHandler = (e: MouseEvent<HTMLButtonElement>) => {
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
  const directViewHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setView(Number(e.currentTarget.id))
  }

  return (
    <S.homeContainer>
      <S.decContainer>
        <S.pageBtn type='button' id='left' onClick={viewHandler}>
          <Arrow className='left' />
        </S.pageBtn>
        {view === 0 && (
          <S.decBox view={btn}>
            <span>
              나만의 운동 루틴을 만들어 <br /> 체계적으로 운동하세요!
            </span>
          </S.decBox>
        )}
        {view === 1 && (
          <S.decBox view={btn}>
            <span>
              나의 운동 볼륨과 기록들을 <br />볼 수 있습니다.
            </span>
          </S.decBox>
        )}
        {view === 2 && (
          <S.decBox view={btn}>
            <span className='start'>이제 저와 함께 운동해 볼까요?</span>
          </S.decBox>
        )}
        {view === 3 && (
          <S.decBox view={btn}>
            <UserInfo />
          </S.decBox>
        )}
        <S.pageBtn type='button' id='right' onClick={viewHandler}>
          <Arrow className='right' />
        </S.pageBtn>
      </S.decContainer>
      <S.orderBox>
        <S.orderZero id='0' onClick={directViewHandler} view={view} />
        <S.orderOne id='1' onClick={directViewHandler} view={view} />
        <S.orderTwo id='2' onClick={directViewHandler} view={view} />
        <S.orderThr id='3' onClick={directViewHandler} view={view} />
      </S.orderBox>
    </S.homeContainer>
  )
}

export default Home
