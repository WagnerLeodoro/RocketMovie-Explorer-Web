import { Container } from './styles'

export function Button({ title, loading = false, save, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      $save={toString(save)}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
