import { Tag } from '../Tag'
import { Container } from './styles'
import { Rating } from '../Rating'

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating grade={data.rating} isfull={false} />
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag, index) => (
            <Tag key={index} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
