import Container from "Components/Container"
import Header from "Components/Header"
import Carrinho from "Pages/Carrinho"
import Inicio from "Pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
        <Container>
          <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="/carrinho" element={ <Carrinho /> } />
          </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default AppRoutes