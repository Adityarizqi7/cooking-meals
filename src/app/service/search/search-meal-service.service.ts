import { HttpClient } from '@angular/common/http';
import { Injectable, makeStateKey, OnInit, StateKey, TransferState } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchMealServiceService {

  constructor(
      private http: HttpClient,
      private state: TransferState
  ) { }

  API_SEARCH_MEAL: string = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  getSearchMeal(meal: string): Observable<any> {
      const STATE_KEY: StateKey<object> = makeStateKey('')

      const cachedData = this.state.get(STATE_KEY, null)

      if (cachedData) {
        return of(cachedData)
      } else {
        return this.http.get(this.API_SEARCH_MEAL+meal).pipe(
          map(data => {
            this.state.get(STATE_KEY, data);
            return data;
          })
        )
      }
  }
}
