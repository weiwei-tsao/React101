import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Error } from "./pages/Error";
import { SharedLayout } from "./pages/SharedLayout";
import { SingleProduct } from "./pages/SingleProduct";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Authentication } from "./pages/Authentication";
import { SharedProductLayout } from "./pages/SharedProductLayout";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>

          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <Authentication user={user}>
                <Dashboard user={user} />
              </Authentication>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer>our footer</footer>
    </BrowserRouter>
  );
};

export default App;
