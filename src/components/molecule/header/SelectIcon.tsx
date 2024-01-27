import * as Styled from './selecticon.styled'
import HeaderIcon from '@/components/atom/icon/header/HeaderIcon'
import ActiveHeaderIcon from '@/img/HeaderIcon'

function SelectIcon({
  isUser,
  isDisableCoachmark,
}: {
  isUser?: boolean
  isDisableCoachmark?: boolean
}) {
  console.log('isDisableCoachmark111', isDisableCoachmark)
  return (
    <Styled.SLayout>
      <HeaderIcon isDisableCoachmark={isDisableCoachmark} icon={<ActiveHeaderIcon />} />
      {/* 공유하기 아이콘 자리  */}
      {isUser && <HeaderIcon icon={<ActiveHeaderIcon />} />}
      {/* 알람 기능 */}
    </Styled.SLayout>
  )
}

export default SelectIcon
