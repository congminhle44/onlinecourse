import Home from "./pages/Homepage/home";
import Login from "./Components/Login/login";

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
];
