import * as Styled from './envelope.styled'
import EnvelopeGoldImg from '@/img/EnvelopeGold.png'
import EnvelopeSilverImg from '@/img/EnvelopeSilver.png'
import EnvelopeBronzeImg from '@/img/EnvelopeBronze.png'

interface EnvelopeProps {
  color: string
}

function Envelope({ color }: EnvelopeProps) {
  let envelopeImg

  switch (color) {
    case '#D7C07A':
      envelopeImg = EnvelopeGoldImg
      break
    case '#ABABAB':
      envelopeImg = EnvelopeSilverImg
      break
    case '#BBB3A0':
      envelopeImg = EnvelopeBronzeImg
      break
    default:
      envelopeImg = EnvelopeGoldImg
  }

  return (
    <Styled.Swrapper>
      <img src={envelopeImg} alt="Envelope" />
    </Styled.Swrapper>
  )
}

export default Envelope
