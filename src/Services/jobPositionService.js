import axios from 'axios'


export default class jobPositionService {
    getAll(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }
}
