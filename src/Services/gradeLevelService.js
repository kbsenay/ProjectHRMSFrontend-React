import axios from "axios"


export default class gradeLevelService{
    getAll(){
        return axios.get("http://localhost:8080/app/gradelevel/getall")
    }
}