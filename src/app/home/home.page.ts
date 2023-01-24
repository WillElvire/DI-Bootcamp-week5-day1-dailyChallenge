import { Component,OnInit } from '@angular/core';
import { films } from '../models/films.models';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  film!:films[]
  loading : boolean = false

  constructor(private api:ApiService) {}


  ngOnInit(): void {
    this.api.request().then(((data : films[])=>{
      this.film=data
      this.loading = true
    }))
  }
}
