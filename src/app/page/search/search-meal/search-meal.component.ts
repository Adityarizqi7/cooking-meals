import { Component, OnInit } from '@angular/core';
import { SearchMealServiceService } from '../../../service/search/search-meal-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailIngredientByIdService } from '../../../service/details/detail-ingredient-by-id.service';
import { DetailIngredientById } from '../../../models/detail-ingredient-by-id';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-meal',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-meal.component.html',
  styleUrl: './search-meal.component.scss'
})
export class SearchMealComponent implements OnInit {

    constructor(
      private SearchMeal: SearchMealServiceService,
      private route: ActivatedRoute,
      private router: Router,
      private DetailIngreById: DetailIngredientByIdService
    ) {}

    search: string = ''
    searchSlug: any = ''
    searchMealData: DetailIngredientById[] = []
    loadingSearchMeal: boolean = false;

    ngOnInit(): void {
        this.route.queryParamMap.subscribe(params => {
          const slug = params.get('ref')
          this.searchSlug = slug;

          if (slug) {
            try {
              this.loadingSearchMeal = true;
              this.SearchMeal.getSearchMeal(slug).subscribe(data => {
                this.searchMealData = data.meals
                this.loadingSearchMeal = false;
              })
            } catch (error) {
              this.loadingSearchMeal = false;
            }
            
          }
        })
    }

    backToHome() {
      this.router.navigate(['/']);
    }

    navigateToDetailsById(data: any) {
        this.DetailIngreById.setDetailIngreById(data)
        this.router.navigate(['/ingredient/detail'], { queryParams: { ref: data.idMeal } })
    }
    handleSearch() {
      console.log('haii')
      this.router.navigate(['/search-meal'], { queryParams: { ref: this.search }})
  }
}
