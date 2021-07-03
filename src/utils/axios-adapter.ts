import axios from 'axios';

class CountriesClient {
      http: any;
       constructor(baseUrl: string){
         this.http = axios.create({
            baseURL: baseUrl,
          });
       }
  
  }


  export default new CountriesClient('https://restcountries.eu/rest/v2')