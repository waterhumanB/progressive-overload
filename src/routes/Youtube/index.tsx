import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../assets/imgs/arrow.svg'
import * as S from './styles'

const SEARCH_DATA = [
  '무분할',
  '2분할',
  '3분할',
  '4분할',
  '5분할',
  '가슴 루틴',
  '등 루틴',
  '팔 루틴',
  '어깨 루틴',
  '하체 루틴',
  '복근 루틴',
]
const Youtube = () => {
  const [translate, setTranslate] = useState(0)
  const Navigate = useNavigate()
  const returnPageBtn = () => {
    Navigate(-1)
  }

  const categoryOrderHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    console.log(translate)
    if (name === 'Left' && translate >= 50) {
      setTranslate((prev) => prev - 89.2)
    }
    if (name === 'Right' && translate < 450) {
      setTranslate((prev) => prev + 89.2)
    }
  }
  return (
    <section>
      <div>Youtube</div>
      <S.caegoryCotainer>
        <S.pageLeftBtn position={translate} name='Left' type='button' onClick={categoryOrderHandler}>
          <Arrow className='Left' />
        </S.pageLeftBtn>
        <div className='cardBox'>
          <S.cardTranslate position={translate}>
            {SEARCH_DATA.map((data) => (
              <S.categoryBox key={data}>{data}</S.categoryBox>
            ))}
          </S.cardTranslate>
        </div>
        <S.pageRightBtn position={translate} name='Right' type='button' onClick={categoryOrderHandler}>
          <Arrow />
        </S.pageRightBtn>
      </S.caegoryCotainer>
      <button type='button' onClick={returnPageBtn}>
        뒤로가기
      </button>
    </section>
  )
}

export default Youtube
