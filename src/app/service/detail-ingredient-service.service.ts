import { Injectable, makeStateKey, StateKey, TransferState } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DetailIngredientServiceService {

  API_DETAIL_INGRE = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='

  constructor(
    private http: HttpClient,
    private state: TransferState
  ) { }

  ingredientDetail = []

  setIngredientDetail(ingre: any) {
    this.ingredientDetail = ingre
  }

  getIngredientDetail() {
    return this.ingredientDetail;
  }

  clearIngredientDetail() {
    this.ingredientDetail = []
  }

  getIngreDetail(slug: any): Observable<any> {
    const DETAIL_INGRE_KEY: StateKey<any> = makeStateKey<object>('detail-ingre-' + slug)

    const cachedData = this.state.get(DETAIL_INGRE_KEY, null)

    if (cachedData) {
        return of(cachedData)
    } else {
      return this.http.get(`${this.API_DETAIL_INGRE}${slug.split(' ').join('_').toLocaleLowerCase()}`).pipe(
        map(data => {
          this.state.set(DETAIL_INGRE_KEY, data);
          return data
        })
      )
    }
  }
}
