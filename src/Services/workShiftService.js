import axios from "axios"

export default class workShiftService{
    getAll(){
        return axios.get("http://localhost:8080/app/workshift/getAll")
    }
}