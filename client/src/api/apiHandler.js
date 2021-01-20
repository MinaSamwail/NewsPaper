import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/newsPaper",
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response) {
    console.log(error.response.data.message);
    throw error.response.data;
  }
  throw error;
}

export default {
  service,
  signup(userInfo) {
    return service
      .post("/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  signin(userInfo) {
    return service
      .post("/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  logout() {
    return service.delete("/auth/logout").catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  transferArticle(total) {
    return service
      .patch(`/users/article`, total)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  getArticle() {
    return service
      .get(`/users/dashboard`) // ici
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
