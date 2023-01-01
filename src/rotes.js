import Container from "Components/Container"
import Header from "Components/Header"
import Footer from "Components/Footer"
import Carrinho from "Pages/Carrinho"
import Inicio from "Pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Produto from "Pages/Produto"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
        <Container>
          <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="/carrinho" element={ <Carrinho /> } />
            <Route path="*" element={ <h1>Página não encontrada</h1> } />
            <Route path="/produtos/:id"  element={ <Produto /> }/>
          </Routes>
        </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes