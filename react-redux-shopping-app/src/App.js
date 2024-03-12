import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

export function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={ <ProductList />} />
          <Route path="/product/:productId" exact element={<ProductDetails/>} />
          <Route render={() => <div>404 Not Found!</div>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
