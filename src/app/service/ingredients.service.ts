import { HttpClient } from '@angular/common/http';
import { Injectable, makeStateKey, TransferState } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Ingredient } from '../models/ingredient';

const INGRE_KEY = makeStateKey<object>('ingredients')

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {

  API_INGRE: string = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

  constructor(
    private http: HttpClient,
    private state: TransferState
  ) { }

  getAllIngredients(): Observable<any> {
      const cachedData = this.state.get(INGRE_KEY, null);

      if (cachedData) {
          return of(cachedData)
      } else {
        return this.http.get(this.API_INGRE).pipe(
          map(data => {
            this.state.set(INGRE_KEY, data)
            return data
          })
        )
      }
  }
}
