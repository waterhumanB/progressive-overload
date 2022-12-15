import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import CustomSelectorBtn from '../../../components/CustomSelectorBtn'
import Modal from '../../../components/Modal'
import * as S from './styles'

const CustomExercise = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const navigate = useNavigate()

  const backPageRouter = () => {
    navigate(-1)
  }

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal)
  }
  return (
    <S.customPageConatiner>
      <S.customTitleBox>
        <button onClick={backPageRouter} type='button'>
          <Arrow />
        </button>
        <div>커스텀 운동 추가 하기</div>
      </S.customTitleBox>
      <S.cutomDataBox>
        <S.customInput>
          <input placeholder='운동 이름을 입력해주세요!' />
        </S.customInput>
        <CustomSelectorBtn name='category' value='카테고리' toggleModalHandler={toggleModalHandler} />
        <CustomSelectorBtn name='mainTarget' value='주요 타겟' toggleModalHandler={toggleModalHandler} />
        <CustomSelectorBtn name='secondTarget' value='보조 타겟' toggleModalHandler={toggleModalHandler} />
      </S.cutomDataBox>
      <div>
        <button type='button'>운동 추가</button>
      </div>
      {toggleModal && <Modal modalName='customExercise' toggleModalHandler={toggleModalHandler} />}
    </S.customPageConatiner>
  )
}

export default CustomExercise
