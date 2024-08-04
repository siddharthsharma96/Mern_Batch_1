import { Footer } from "./Components/Footer";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import "./Style/App.css";

function App() {
  return (
    <div className="app">
      <h1>Learning React</h1>
      <Counter />
      {/* <Header /> */}
      {/* <h1>Learning React </h1>
      // <Header />
      <Footer /> */}
    </div>
  );
}

export default App;
