import "./App.css"
import Header from "./components/Header"
import Container from "./components/Container"
import Body from "./components/Body"
import { useSelector } from "react-redux"

function App() {
  const darkMode = useSelector((state) => state.settings.darkMode)

  if (darkMode === true) {
    document.body.style = "background-color: #292929; color: white"
  } else {
    document.body.style = ""
  }

  return (
    <div className={`App`}>
      <Container>
        <Header />
        <Body />
      </Container>
    </div>
  )
}

export default App
