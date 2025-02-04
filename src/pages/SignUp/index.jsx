import { FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Background, Container, Form } from "./styles"
import { useState } from "react"
import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(e) {
    e.preventDefault()
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert("Error: " + error.response.data.message)
        } else {
          alert("Não foi possível cadastrar!")
        }
      })
  }
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button save title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">Voltar para o login</Link>
      </Form>
      <Background />
    </Container>
  )
}
