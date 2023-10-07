import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Blogpost from "./components/blogpost";
// import BasicTextFields from "./components/blogpost";

function App() {
  return (
    <div className="App">
      <Header />
      <Blogpost />
      <Footer />
    </div>
  );
}

export default App;
