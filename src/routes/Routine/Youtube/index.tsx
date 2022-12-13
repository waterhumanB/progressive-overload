import { MouseEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowBtn } from '../../../assets/imgs/arrow_btn.svg'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { SEARCH_DATA } from '../../../data/searchData'
import * as S from './styles'
import YoutubeCard from '../../../components/YoutubeCard'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getYoubuteData, getYoutubeDataList } from '../../../states/youtube'

const Youtube = () => {
  const [translate, setTranslate] = useState(0)
  const [categoryIndex, setCategoryIndex] = useState(0)

  const dispatch = useAppDispatch()
  const selector = useAppSelector(getYoutubeDataList)
  const Navigate = useNavigate()
  const youtubeState = selector.youtubeData
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
  useEffect(() => {
    // if (youtubeState.length === 0) {
    //   dispatch(getYoubuteData())
    // }
  })

  const categoryIndexhandler = (e: MouseEvent<HTMLButtonElement>) => {
    setCategoryIndex(Number(e.currentTarget.name))
  }

  return (
    <section>
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
              <S.categoryBox
                focus={categoryIndex === index}
                onClick={categoryIndexhandler}
                name={String(index)}
                key={data}
              >
                {data}
              </S.categoryBox>
            ))}
          </S.cardTranslate>
        </div>
        <S.pageRightBtn position={translate} name='Right' type='button' onClick={categoryOrderHandler}>
          <ArrowBtn />
        </S.pageRightBtn>
      </S.caegoryCotainer>
      <YoutubeCard categoryIndex={categoryIndex} />
    </section>
  )
}

export default Youtube
