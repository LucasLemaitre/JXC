import { isDataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICreatures, IData, IDataEntry, IDatasAll, IMonsters } from 'src/model/IData';


@Injectable({
  providedIn: 'root'
})

export class DataApiService {

  path = "https://botw-compendium.herokuapp.com/api/v2";

  constructor(private http: HttpClient) {}

  getItem(nom:number|string): Observable<IData> {
    return this.http.get<IDataEntry>(this.path + "/entry/" + nom)
      .pipe(
        map(res => {
          return {
            id: res.data.id, 
            category: res.data.category, 
            name: res.data.name, 
            description: res.data.description, 
            common_locations: res.data.common_locations, 
            image: res.data.image,
            drops: res.data.drops,
            hearts_recovered: res.data.hearts_recovered!,
            cooking_effect: res.data.cooking_effect!
          }
        })
      )
  }

  getAll(): Observable<IData[]> {
    return this.http.get<IDatasAll>(this.path)
      .pipe(
        map(res => {
          let resultat: any[] = [];
          res.data.monsters.forEach(function (r) {
            resultat.push({
              id: r.id, 
              category: r.category, 
              name: r.name, 
              description: r.description, 
              common_locations: r.common_locations, 
              image: r.image,
              drops: r.drops,
              hearts_recovered: r.hearts_recovered!,
              cooking_effect: r.cooking_effect!
            })
          })
          res.data.creatures.food.concat(res.data.creatures.non_food).forEach(function (r) {
            resultat.push({
              id: r.id, 
              category: r.category, 
              name: r.name, 
              description: r.description, 
              common_locations: r.common_locations, 
              image: r.image,
              drops: r.drops,
              hearts_recovered: r.hearts_recovered!,
              cooking_effect: r.cooking_effect!
            })
          })
          return resultat;
        })
      )
  }

  getMonsters() : Observable<IData[]>{
    return this.http.get<IMonsters>(this.path + "/category/monsters")
      .pipe(
        map(res => {
          let resultat: any[] = [];
          res.data.forEach(function (r) {
            resultat.push({
              id: r.id, 
              category: r.category, 
              name: r.name, 
              description: r.description, 
              common_locations: r.common_locations, 
              image: r.image,
              drops: r.drops,
              hearts_recovered: r.hearts_recovered!,
              cooking_effect: r.cooking_effect!
            })
          })
          return resultat;
        })
      )
  }

  getCreatures() : Observable<IData[]>{
    return this.http.get<ICreatures>(this.path + "/category/creatures")
      .pipe(
        map(res => {
          let resultat: any[] = [];
          res.data.food.concat(res.data.non_food).forEach(function (r) {
            resultat.push({
              id: r.id, 
              category: r.category, 
              name: r.name, 
              description: r.description, 
              common_locations: r.common_locations, 
              image: r.image,
              drops: r.drops,
              hearts_recovered: r.hearts_recovered!,
              cooking_effect: r.cooking_effect!
            })
          })
          return resultat;
        })
      )
  }

}
