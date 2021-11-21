import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />

        <Route path="/login" element={<Login />}>
          {user ? (
            <Route path="/login" element={<Navigate to="/" replace />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Route>

        <Route path="/register" element={<Register />}>
          {user ? (
            <Route
              path="/register"
              element={<Navigate replace to="/login" element={<Login />} />}
            />
          ) : (
            <Route path="/register" element={<Register />} />
          )}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
