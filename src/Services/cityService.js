import axios from "axios"

export default class cityService{
    getById(id){
        return axios.get("http://localhost:8080/app/city/getAll?id="+id)
    }

    getAll(){
        return axios.get("http://localhost:8080/app/city/getAll")
    }
}