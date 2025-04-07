import { HttpClient } from '@angular/common/http';
import { Injectable, makeStateKey, StateKey, TransferState } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailIngredientByIdService {

  constructor(
      private http: HttpClient,
      private state: TransferState
  ) { }

  API_DETAIL_INGRE_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

  detailIingredient: any

  setDetailIngreById(data: any) {
      this.detailIingredient = data
  }

  getDetailIngredient() {
    return this.detailIingredient;
  }

  clearDetailngredient() {
    this.detailIingredient = null
  }

  getDataIngredientById(id: string) {
      const STATE_KEY: StateKey<object> = makeStateKey<object>('ingredient-by-id' + id)

      const cachedData = this.state.get(STATE_KEY, null);

      if (cachedData) {
          return of(cachedData);
      } else {
          return this.http.get(this.API_DETAIL_INGRE_BY_ID + id).pipe(
            map(data => {
              this.state.set(STATE_KEY, data)
              return data;
            })
          )
      }
  }
}
