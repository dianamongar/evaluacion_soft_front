import axios from 'axios';

export default class CountryService{
    
    getCountries(){
        var url = "http://localhost:8080/api/v1/country";
        return axios.get(url);
    }
}