import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />}>
          {user ? <Route to="/" /> : <Login />}
        </Route>

        <Route path="/register" element={<Register />}>
          {user ? <Route to="/" /> : <Register />}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
