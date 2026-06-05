import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import NotFoundView from "@/views/notFound";
import { isAuthenticated } from "@/utils";

const routes = {
  "/": loginView,
  "/home": homeView,
};

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

export const router = () => {
  const app = document.querySelector("#app");

  let path = window.location.pathname;

  if(path!=="/" && !isAuthenticated()){ navigateTo("/"); return; }


  const view = routes[path] || NotFoundView;

  app.innerHTML = view();
};

window.addEventListener("popstate", router);
