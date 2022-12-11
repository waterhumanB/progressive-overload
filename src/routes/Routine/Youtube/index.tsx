import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowBtn } from '../../../assets/imgs/arrow_btn.svg'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { SEARCH_DATA } from '../../../data/searchData'
import { getYoutubeSearchApi } from '../../../service/youtube'
import * as S from './styles'
import YoutubeCard from '../../../components/YoutubeCard'

const Youtube = () => {
  // const widthRef = useRef<HTMLDivElement>(null)
  const [translate, setTranslate] = useState(0)
  const Navigate = useNavigate()
  const returnPageBtn = () => {
    Navigate(-1)
  }
  const categoryOrderHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    if (name === 'Left' && translate >= 50) {
      setTranslate((prev) => prev - 87)
    }
    if (name === 'Right' && translate < 560) {
      setTranslate((prev) => prev + 87)
    }
  }
  const categoryHandlerBtn = async (index: number) => {
    getYoutubeSearchApi({ q: SEARCH_DATA[index] })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <main>
      <S.titleBox>
        <button type='button' onClick={returnPageBtn}>
          <Arrow />
        </button>
        <div className='title'>유튜브 추천 운동 루틴</div>
      </S.titleBox>
      <S.caegoryCotainer>
        <S.pageLeftBtn position={translate} name='Left' type='button' onClick={categoryOrderHandler}>
          <ArrowBtn className='Left' />
        </S.pageLeftBtn>
        <div className='cardBox'>
          <S.cardTranslate position={translate}>
            {SEARCH_DATA.map((data, index) => (
              <S.categoryBox key={data}>{data}</S.categoryBox>
            ))}
          </S.cardTranslate>
        </div>
        <S.pageRightBtn position={translate} name='Right' type='button' onClick={categoryOrderHandler}>
          <ArrowBtn />
        </S.pageRightBtn>
      </S.caegoryCotainer>
      <YoutubeCard />
    </main>
  )
}

export default Youtube
