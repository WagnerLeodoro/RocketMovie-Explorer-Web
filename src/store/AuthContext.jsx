import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password })

      const { user, token } = response.data

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setData({ user, token })

      localStorage.setItem("@rocketmovie:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovie:token", JSON.stringify(token))
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível entrar!")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovie:user")
    localStorage.removeItem("@rocketmovie:token")
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)
        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }
      await api.put("/users", user)
      localStorage.setItem("@rocketmovie:user", JSON.stringify(user))
      setData({ user, token: data.token })
      alert("Perfil atualizado com sucesso!")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovie:token")
    const user = localStorage.getItem("@rocketmovie:user")

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
