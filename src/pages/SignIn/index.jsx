import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Background, Container, Form } from "./styles"
import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"

export function SignIn() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function handleSignIn(e) {
    e.preventDefault()
    setIsLoading(true)
    signIn({ email, password })
      .then(() => {
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          id="email"
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="password"
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button save title="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
