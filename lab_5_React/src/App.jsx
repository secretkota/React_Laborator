import { Route, Routes } from "react-router"
import GlobalStyle from "./globalStyles"

import MainPage from "./pages/mainPage"
import CarSelectPage from "./pages/CarSelectPage"
import PageError from "./pages/PageError"
import CarFormPage from "./pages/CarFormPage"

import MainLayout from "./layouts/MainLayout"


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
          <Route element={<MainLayout />}>
          <Route index path="/" element={<MainPage />}/>
          <Route path="/carList" element={<CarSelectPage />}/>
          <Route path="/carForm" element={<CarFormPage />} />
          <Route path="/carList/:id?" element={<CarSelectPage />}/>
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
