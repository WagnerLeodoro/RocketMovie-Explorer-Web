import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"

import { FiArrowLeft } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { MovieItem } from "../../components/MovieItem"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"

import { Container, Controls, Form } from "./styles"

export function NewMovie() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [rating, setRating] = useState("")
  const [tags, setTags] = useState([])

  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleNewTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewMovie() {
    try {
      if (!title) {
        return alert("Digite o título do filme")
      }
      if (newTag) {
        return alert(
          "Você deixou uma tag no campo para adicionar porém não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!",
        )
      }
      await api.post("/movies", { title, description, tags, rating })
      alert("Filme adicionado com sucesso!")
      handleBack()
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar o filme.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  function handleDiscardMovie() {
    const userConfirm = confirm(
      "Todas as alterações serão perdidas... Tem certeza que deseja descartar as mesmo assim?",
    )

    if (userConfirm) {
      navigate(-1)
    }
  }

  return (
    <Container>
      <Header />
      <ButtonText onClick={handleBack}>
        <FiArrowLeft />
        voltar
      </ButtonText>

      <main>
        <Form>
          <h2>Novo Filme</h2>
          <div className="form-group">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0  a 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form>
        <Section title="Marcadores">
          <div className="tags">
            {tags.map((tag, index) => (
              <MovieItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
          </div>
          <MovieItem
            $isnew
            placeholder="Nova tag"
            onChange={(e) => setNewTag(e.target.value)}
            onClick={() => handleNewTag()}
          />
        </Section>
        <Controls>
          <Button title="Excluir" onClick={handleDiscardMovie} />
          <Button save title="Salvar" onClick={handleNewMovie} />
        </Controls>
      </main>
    </Container>
  )
}
