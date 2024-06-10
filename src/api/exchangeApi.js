import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://localhost:7101/api/Exchange",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  }
});

export const exchangeApi = {
  convertToUSD(price) {
    return instance.get(`?price=${price}&currency=431`)
      .then(response => response.data);
  }
}