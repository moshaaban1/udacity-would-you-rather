import HomePage from "./pages/home/home.page";
import Leaderboard from "./pages/leaderboard/leaderboard.page";
import NewQuestion from "./pages/new-question/new-question.page";
import QuestionPage from "./pages/question/question.page";
import Login from "./pages/login/login.page";
import NotFound from "./pages/404/404.page";

const routes = [
   {
      path: "/",
      name: "home",
      component: HomePage,
      exact: true,
      auth: true
   },
   {
      path: "/leaderboard",
      name: "leaderboard",
      component: Leaderboard,
      auth: true
   },
   {
      path: "/add",
      name: "add",
      component: NewQuestion,
      auth: true
   },
   {
      path: "/questions/:questionId",
      name: "question",
      component: QuestionPage,
      auth: true
   },
   {
      path: "/login",
      name: "login",
      component: Login,
      auth: false
   },
   {
      path: "*",
      name: "404",
      component: NotFound,
      auth: true
   }
];

export default routes;
