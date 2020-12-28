import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    search: (query) => {
        return axios.get(URL + query)
        
    },
    get: () => {
        return axios.get("/api/books")
    },
    save: (book) => {
        return axios.post("/api/books", book)
    },
    delete: (id) => {
        return axios.delete("/api/books/" + id)
    }
}