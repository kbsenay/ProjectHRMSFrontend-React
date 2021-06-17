import axios from "axios"

export default class cityService{
    getAll(){
        return axios.get("http://localhost:8080/app/city/getAll")
    }
}