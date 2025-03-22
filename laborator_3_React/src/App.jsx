import { Route, Routes } from "react-router"
import Header from "./components/Header"
import GlobalStyle from "./globalStyles"

import MainPage from "./pages/mainPage"
import CarSelectPage from "./pages/CarSelectPage"
import PageError from "./pages/PageError"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/carList" element={<CarSelectPage />}/>
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  )
}

export default App
