import { api } from "../../services/api"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

import { Avatar, Brand, Container, Profile } from "./styles"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({ children }) {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  return (
    <Container>
      <Brand to="/">
        <h1>RocketMovies</h1>
      </Brand>
      {children}
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <a onClick={handleSignOut}>sair</a>
        </div>
        <Avatar to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Avatar>
      </Profile>
    </Container>
  )
}
