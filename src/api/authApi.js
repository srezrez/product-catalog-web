import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://localhost:7101/api/",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  }
});

export const authApi = {
    login(email, password) {
        return instance.post('User/login', { email, password })
            .then(response => response.data);
    }
}