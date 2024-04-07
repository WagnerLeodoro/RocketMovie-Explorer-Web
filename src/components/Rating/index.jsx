import { VscStarEmpty, VscStarFull } from 'react-icons/vsc'
import { Container } from './styles'

export function Rating({ grade, full = false }) {
  let stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Number(grade)) {
      stars.push(<VscStarFull key={i} />)
    } else {
      stars.push(<VscStarEmpty key={i} />)
    }
  }
  return <Container $full={full}>{stars}</Container>
}
