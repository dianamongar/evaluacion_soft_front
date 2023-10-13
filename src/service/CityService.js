import axios from 'axios';

export default class CityService{
    
    getCities(id){
        var url = `http://localhost:8080/api/v1/city/state/${id}`;
        return axios.get(url);
    }
}