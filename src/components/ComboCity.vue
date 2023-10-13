<template>
    <h1>Seleccion de ciudades</h1>
    <div>
        <h2>Pais</h2>
        <select v-model="countrySelected" class="form-control" id="country">
            <option v-for="country in countries" :key="country.id"  onclick="city(country.id)">{{country.name}}</option>
        </select>
        <h2>Departamento</h2>
        <h2>Pais</h2>
        <select v-model="departmentSelected" class="form-control" id="department">
            <option v-for="dep in departments" :key="dep.id"  >{{dep.name}}</option>
        </select>
        <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <h2>Ciudad</h2>
        <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</template>

<script>

//import Swal from 'sweetalert2';
// import { useStore } from 'vuex';
import CountryService from '../service/CountryService.js';
import CityService from '../service/CountryService.js';
export default {
    
    name : 'LoginView',
    data() {
        return {
            countries:[],
            ciudad:[],
            departaments:[],
            countrySelected: "",
            depSelected:"",

        }
    },
    created(){
        this.countryService = new CountryService();
        this.CityService = new CityService();
        
    },
    mounted(){
        try{
            this.countryService.getCountries().then(response => {
                this.countries = response.data;
                console.log(this.countries);
                
            });
        }catch(error){
            console.log(error);
        }
    },
    methods: {
        city(id){
            this.countryService.getCountries().then(response => {
                this.countries = response.data;
                console.log(this.countries);
                
            });
        }
    },
}
</script>
