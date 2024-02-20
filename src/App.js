import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Blogpost from "./components/blogpost";
// import BasicTextFields from "./components/blogpost";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="blogpost">
        <Blogpost />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
