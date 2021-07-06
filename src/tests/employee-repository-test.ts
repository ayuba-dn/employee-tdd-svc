import Employee from "../models/employee-interface";
import EmployeeRepository from "../repositories/employee-repository";
import countriesClient from "../utils/countries-http-client"


describe("Employee Repository",()=>{
   
    const specialRegions:String[] = ["Asia","Europe"];
    const usaData = {
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
    const indiaData = {
          data:{
            name: "India",
            topLevelDomain: [
              ".in"
            ],
            alpha2Code: "IN",
            alpha3Code: "IND",
            callingCodes: [
              "91"
            ],
            capital: "New Delhi",
            altSpellings: [
              "IN",
              "Bhārat",
              "Republic of India",
              "Bharat Ganrajya"
            ],
            region: "Asia",
            subregion: "Southern Asia",
            population: 1295210000,
            latlng: [
              20,
              77
            ],
            demonym: "Indian",
            area: 3287590,
            gini: 33.4,
            timezones: [
              "UTC+05:30"
            ],
            borders: [
              "AFG",
              "BGD",
              "BTN",
              "MMR",
              "CHN",
              "NPL",
              "PAK",
              "LKA"
            ],
            nativeName: "भारत",
            numericCode: "356",
            currencies: [
              {
                code: "INR",
                name: "Indian rupee",
                symbol: "₹"
              }
            ],
            languages: [
              {
                iso639_1: "hi",
                iso639_2: "hin",
                name: "Hindi",
                nativeName: "हिन्दी"
              },
              {
                iso639_1: "en",
                iso639_2: "eng",
                name: "English",
                nativeName: "English"
              }
            ],
            translations: {
              de: "Indien",
              es: "India",
              fr: "Inde",
              ja: "インド",
              it: "India",
              br: "Índia",
              pt: "Índia",
              nl: "India",
              hr: "Indija",
              fa: "هند"
            },
            flag: "https://restcountries.eu/data/ind.svg",
            regionalBlocs: [
              {
                acronym: "SAARC",
                name: "South Asian Association for Regional Cooperation",
                otherAcronyms: [],
                otherNames: []
              }
            ],
            cioc: "IND"
          }
    
    }
    const countryDetails = {
      name: "India",
      currencies: [
        {
          code: "INR",
          name: "Indian rupee",
          symbol: "₹"
        }
      ],
      languages: [
        {
          iso639_1: "hi",
          iso639_2: "hin",
          name: "Hindi",
          nativeName: "हिन्दी"
        },
        {
          iso639_1: "en",
          iso639_2: "eng",
          name: "English",
          nativeName: "English"
        }
      ],
      timezones: [
        "UTC+05:30"
      ]
    }
    let usaEmployee: Employee;
    let indiaAsiaEmployee: Employee;
    let allEmployees: Employee[];
    let filteredEmployees: Employee[];

    beforeEach(() => {
      usaEmployee = {
            firstName: "Melissa",
            lastName: "Mocker",
            dateOfBirth: "10/01/1982",
            jobTitle: "Software developer",
            company: "Mock industries", 
            country: "US",
       }
       indiaAsiaEmployee =  {
              firstName:"Simon",
              lastName:"McTester",
              dateOfBirth:"01/11/1987",
              jobTitle:"Product manager",
              company:"Mock industries",
              country:"IND"
       } 
       allEmployees = [
           usaEmployee, indiaAsiaEmployee
       ]
       filteredEmployees = [
          {
            firstName: "Melissa",
            lastName: "Mocker",
            dateOfBirth: "10/01/1982",
            jobTitle: "Software developer",
            company: "Mock industries",
            country: "US",
            countryDetails: {
              name: "United States of America",
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
              ]
            }
          },
          {
            firstName: "Simon",
            lastName: "McTester",
            dateOfBirth: "01/11/1987",
            jobTitle: "Product manager",
            company: "Mock industries",
            country: "IND",
            countryDetails: {
              name: "India",
              currencies: [
                {
                  code: "INR",
                  name: "Indian rupee",
                  symbol: "₹"
                }
              ],
              languages: [
                {
                  iso639_1: "hi",
                  iso639_2: "hin",
                  name: "Hindi",
                  nativeName: "हिन्दी"
                },
                {
                  iso639_1: "en",
                  iso639_2: "eng",
                  name: "English",
                  nativeName: "English"
                }
              ],
              timezones: [
                "UTC+05:30"
              ]
            },
            additionalIndentifier: "SimonMcTester01/11/1987"
          }
       ]
    });
    describe("getCountryDetails",()=>{
        it("Should get an employees country details", async()=>{
            
            const countriesServer = jest.spyOn(countriesClient.http,"get").mockResolvedValueOnce(usaData);
            await EmployeeRepository.getCountryDetails(usaEmployee.country);
            expect(countriesServer).toHaveBeenCalledWith("/alpha/US")
            expect(countriesClient.http.get("/alpha/US")).resolves.toHaveProperty("data.region")

        })         
    })

    describe("addUniqueIdentifier", ()=>{
      it("should add a unique identifier to an employ if his country is in the special regions",async ()=>{
          await EmployeeRepository.addUniqueIdentifier(indiaAsiaEmployee,indiaData);
          expect(indiaAsiaEmployee.additionalIndentifier).toEqual("SimonMcTester01/11/1987")
      })
      it("should not add an additional Identifier to an employee if his country is not in the special region",async()=>{
          await EmployeeRepository.addUniqueIdentifier(usaEmployee,usaData);
          expect(usaEmployee.additionalIndentifier).toEqual(undefined)
      })
    })

    describe("filterEmployees", ()=>{
      it("should add unique identifeir fields to employees from special countries",async()=>{
        const getCountryDetails = jest.spyOn(EmployeeRepository,"getCountryDetails")
        let filtered: Employee[] = await EmployeeRepository.filterEmployees(allEmployees);
        expect(getCountryDetails).toHaveBeenCalledTimes(allEmployees.length)
        expect(getCountryDetails).toHaveBeenCalledWith(
          expect.any(String)
        )
        expect(filtered).toEqual(
           filteredEmployees
        )
        
      })
    })

    describe("addCountryInfo",()=>{
      it("Should add a country details field given an employee and a country list",async()=>{
         await EmployeeRepository.addCountryInfo(indiaAsiaEmployee,indiaData)
         expect(indiaAsiaEmployee.countryDetails).toEqual(countryDetails)
      })
    })

})