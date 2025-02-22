import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PostList from "./components/PostList.jsx"

function App() {
  return (
    <>
      <Header />
      <main>
        <PostList />
      </main>
      <Footer />
    </>
  );
}

export default App;
