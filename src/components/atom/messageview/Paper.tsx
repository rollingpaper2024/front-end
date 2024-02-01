import * as Styled from './paper.styled'
import PaperBronze from '@/img/PaperBronze.png'
import PaperSilver from '@/img/PaperSilver.png'
import PaperGold from '@/img/PaperGold.png'

interface PaperProps {
  color: string
}

function Paper({ color }: PaperProps) {
  let paperImg

  switch (color) {
    case '#D7C07A':
      paperImg = PaperGold
      break
    case '#ABABAB':
      paperImg = PaperSilver
      break
    case '#BBB3A0':
      paperImg = PaperBronze
      break
    default:
      paperImg = PaperGold
  }
  return (
    <Styled.Swrapper>
      <img src={paperImg} alt="Paper" />
    </Styled.Swrapper>
  )
}

export default Paper
