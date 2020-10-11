import Home from "./pages/Homepage/home";
import Login from "./pages/Login/login";
import Cart from "./pages/Cart/cart";
import CourseInfo from "./Components/CourseInfo/courseInfo";

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
  {
    path: "/course-info/course=:id",
    exact: false,
    component: CourseInfo,
  },
];
