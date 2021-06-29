import axios from "axios"

export default class workPlaceService{0
    getAll(){
        return axios.get("http://localhost:8080/app/workplace/getAll")
    }
}