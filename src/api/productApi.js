import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://localhost:7101/api/Product",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('accessToken')
  }
});

export const productApi = {
    getAll(title, categoryId) {
        debugger;
        const params = {};
        if (title) { params.title = title }
        if (categoryId && Number(categoryId)) { params.categoryId = categoryId }
        return instance.get('', { params })
            .then(response => response.data);
    },

    delete(id) {
        return instance.delete(`?productId=${id}`)
            .then(response => response.data);
    },

    create(product) {
        return instance.post('', product)
            .then(response => response.data);
    },

    change(product) {
        return instance.post('/change', product)
            .then(response => response.data);
    }
}