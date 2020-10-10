import Home from "./pages/Homepage/home";
import Login from "./pages/Login/login";
import Cart from "./pages/Cart/cart";

export const client = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    exact: false,
    component: Login,
  },
  {
    path: "/cart",
    exact: false,
    component: Cart,
  },
];
