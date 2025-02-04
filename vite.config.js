import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  process.env.VITE_API_URL

  return defineConfig({
    plugins: [react()],
  })
}
