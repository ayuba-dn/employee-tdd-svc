import Employee from "../models/employee-model";
import EmployeeRepository from "../repositories/employee-repository";
import { EmployeeRoutes } from "../routes/employee-routes";
import AxiosHelper from '../utils/axios-adapter'
const BASE_URL = 'https://restcountries.eu/rest/v2'
import countriesClient from '../utils/axios-adapter'
//jest.mock('../utils/axios-adapter')



describe("Employee Repository",()=>{
    describe("getCountry",()=>{
        it("Should get an employees country details", async()=>{
            const countryInfo = {
                data:{
                    name: "United States of America",
                    topLevelDomain: [
                      ".us"
                    ],
                    alpha2Code: "US",
                    alpha3Code: "USA",
                    callingCodes: [
                      "1"
                    ],
                    capital: "Washington, D.C.",
                    altSpellings: [
                      "US",
                      "USA",
                      "United States of America"
                    ],
                    region: "Americas",
                    subregion: "Northern America",
                    population: 323947000,
                    latlng: [
                      38,
                      -97
                    ],
                    demonym: "American",
                    area: 9629091,
                    gini: 48,
                    timezones: [
                      "UTC-12:00",
                      "UTC-11:00",
                      "UTC-10:00",
                      "UTC-09:00",
                      "UTC-08:00",
                      "UTC-07:00",
                      "UTC-06:00",
                      "UTC-05:00",
                      "UTC-04:00",
                      "UTC+10:00",
                      "UTC+12:00"
                    ],
                    borders: [
                      "CAN",
                      "MEX"
                    ],
                    nativeName: "United States",
                    numericCode: "840",
                    currencies: [
                      {
                        code: "USD",
                        name: "United States dollar",
                        symbol: "$"
                      }
                    ],
                    languages: [
                      {
                        iso639_1: "en",
                        iso639_2: "eng",
                        name: "English",
                        nativeName: "English"
                      }
                    ],
                    translations: {
                      de: "Vereinigte Staaten von Amerika",
                      es: "Estados Unidos",
                      fr: "États-Unis",
                      ja: "アメリカ合衆国",
                      it: "Stati Uniti D'America",
                      br: "Estados Unidos",
                      pt: "Estados Unidos",
                      nl: "Verenigde Staten",
                      hr: "Sjedinjene Američke Države",
                      fa: "ایالات متحده آمریکا"
                    },
                    flag: "https://restcountries.eu/data/usa.svg",
                    regionalBlocs: [
                      {
                        acronym: "NAFTA",
                        name: "North American Free Trade Agreement",
                        otherAcronyms: [],
                        otherNames: [
                          "Tratado de Libre Comercio de América del Norte",
                          "Accord de Libre-échange Nord-Américain"
                        ]
                      }
                    ],
                    cioc: "USA"
                }
             
            }
            const employee: Employee =  {
                firstName: "Melissa",
                lastName: "Mocker",
                dateOfBirth: "10/01/1982",
                jobTitle: "Software developer",
                company: "Mock industries",
                country: "US",
            }
            const getCountry = jest.spyOn(countriesClient.http,'get').mockResolvedValueOnce(countryInfo);
            await EmployeeRepository.getCountry(employee);
            expect(getCountry).toHaveBeenCalledWith('/alpha/US')
            expect(countriesClient.http.get('/alpha/US')).resolves.toHaveProperty('data.region')

        }) 
    })
})