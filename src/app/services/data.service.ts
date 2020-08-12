import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

// Interfaces
import { Componente } from '../interfaces/interfaces';
import { Heroe } from '../interfaces/heroes';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenu() {
    return this.http.get<Componente[]>('../../assets/data/menu.json');
  }
  getHeroes() {
    return this.http.get<Heroe[]>('../../assets/data/superheroes.json')
        .pipe(
          delay(1500)
        );
  }

  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
}