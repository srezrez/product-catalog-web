import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://localhost:7101/api/Category",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('accessToken')
  }
});

export const categoryApi = {
    getAll() {
        return instance.get()
            .then(response => response.data);
    },

    delete(id) {
        return instance.delete(`?categoryId=${id}`)
            .then(response => response.data);
    },

    create(title) {
        return instance.post('', { title })
            .then(response => response.data);
    },

    change(id, title) {
        return instance.post('/change', { id, title })
            .then(response => response.data);
    }
}