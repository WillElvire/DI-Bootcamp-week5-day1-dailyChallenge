import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { films } from "../models/films.models";


@Injectable()

export class ApiService {

   baseUrl = 'https://swapi.dev/api/'
    constructor(private client: HttpClient) { }

    async request(endpoint : string  = 'films'): Promise<films[]>{
        return new Promise((resolve , reject)=>{
            this.client.get(`${this.baseUrl} ${endpoint}`).subscribe((data: any)=> {
              let  allFilms : films[] = [];
              allFilms = data.results as films[];
              resolve(allFilms);
            },
            (error :any)=> { reject(error);}
          )
        })
    }
}
