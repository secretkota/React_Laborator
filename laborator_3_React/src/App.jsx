import { Route, Routes } from "react-router"
import Header from "./components/Header"
import GlobalStyle from "./globalStyles"
import MainPage from "./pages/mainPage"
import CarSelectPage from "./pages/CarSelectPage"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/carList" element={<CarSelectPage />}/>
      </Routes>
    </>
  )
}

export default App
