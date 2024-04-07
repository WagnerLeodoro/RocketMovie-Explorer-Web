import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

import { api } from "../../services/api"
import { format } from "date-fns"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { FiArrowLeft, FiClock } from "react-icons/fi"
import { Container, Tags, UserInfo } from "./styles"

import { Header } from "../../components/Header"
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tag"

export function Details() {
  const { id } = useParams()
  const { user } = useAuth()

  const [movie, setMovie] = useState([])
  const [date, setDate] = useState("")

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${id}`)
      const data = await response.data
      const [movie] = data.filter((data) => data.id == id)
      const formmatedDate = format(movie.created_at, "dd/MM/yyyy 'às' HH:mm")
      setDate(formmatedDate)
      setMovie(movie)
    }
    fetchMovie()
  }, [])

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  return (
    <Container>
      <Header />
      <Link to="/">
        <FiArrowLeft />
        voltar
      </Link>

      <main>
        <header>
          <h2>{movie.title}</h2>
          <Rating grade={movie.rating} isfull={false} />
        </header>

        <UserInfo>
          <img src={avatarUrl} alt={user.name} />
          <p>Por: {user.name}</p>
          <div className="timer">
            <FiClock />
            <p>{date}</p>
          </div>
        </UserInfo>

        {movie.tags && (
          <Tags>
            {movie.tags.map((tag, index) => (
              <Tag key={index} title={tag.name} />
            ))}
          </Tags>
        )}

        <p className="description">{movie.description}</p>
      </main>
    </Container>
  )
}
