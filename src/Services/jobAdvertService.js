import axios from "axios"

export default class JobAdvertService{
    getAllByIsActiveTrue(){
        return axios.get("http://localhost:8080/app/jobadvert/getAllByIsActiveTrue")
    }

    getAllByIsActiveTrueAndPublishedAtDesc(){
        return axios.get("http://localhost:8080/app/jobadvert/getAllByIsActiveTrueAndPublishedAtDesc")
    }

    getAllById(id){
        return axios.get("http://localhost:8080/app/jobadvert/getByJobAdvertId?id="+id)
    }
    add(){
        return axios.post("http://localhost:8080/app/jobadvert/add")
    }


    
    
}