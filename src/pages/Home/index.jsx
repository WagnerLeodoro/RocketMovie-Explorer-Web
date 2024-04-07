import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Movie } from "../../components/Movie"

import { FiPlus } from "react-icons/fi"
import { Container, Content, NewMovie } from "./styles"

export function Home() {
  const [movie, setMovie] = useState([])
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies?title=${search}`)
      setMovie(response.data)
    }
    fetchMovie()
  }, [search])

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar por título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <header>
        <h2>Meus Filmes</h2>
        <NewMovie to="/new">
          <FiPlus size={16} />
          Adicionar filme
        </NewMovie>
      </header>
      <Content>
        {movie ? (
          movie.map((movie, index) => (
            <Movie
              key={String(index)}
              data={movie}
              onClick={() => {
                handleDetails(movie.id)
              }}
            />
          ))
        ) : (
          <h2>Ops... nenhum filme adicionado ainda</h2>
        )}
      </Content>
    </Container>
  )
}
