import axios from 'axios';

 class CountriesHttpClient {
      http: any;
       constructor(baseUrl: string){
         this.http = axios.create({
            baseURL: baseUrl,
          });
       }
  
  }

  export default new CountriesHttpClient('https://restcountries.eu/rest/v2')
