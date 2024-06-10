import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://localhost:7101/api/User",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('accessToken')
  }
});

export const userApi = {
    getAll() {
        return instance.get()
            .then(response => response.data);
    },

    delete(id) {
        return instance.delete(`?userId=${id}`)
            .then(response => response.data);
    },

    create(user) {
        return instance.post('', user)
            .then(response => response.data);
    },

    changeStatus(id) {
        return instance.post(`change-status?userId=${id}`)
            .then(response => response.data);
    },

    changePassword(changePassword) {
        return instance.post(`change-password`, changePassword)
            .then(response => response.data);
    },
}