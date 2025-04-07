import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DetailIngredientServiceService } from '../../service/detail-ingredient-service.service';
import { CommonModule } from '@angular/common';
import { DetailIngredient } from '../../models/detail-ingredient';
import { DetailIngredientByIdService } from '../../service/details/detail-ingredient-by-id.service';

@Component({
  selector: 'app-detail-ingredient',
  imports: [RouterModule, CommonModule],
  templateUrl: './detail-ingredient.component.html',
  styleUrl: './detail-ingredient.component.scss'
})

export class DetailIngredientComponent implements OnInit {

  constructor(
      private title: Title, 
      private router: Router,
      private route: ActivatedRoute,
      private DetailIngreById: DetailIngredientByIdService,
      private DetailIngreService: DetailIngredientServiceService
  ) {}

  ingredientDetail: DetailIngredient[] = []

  slug: string | null = ''
  loadingDataIngreDetail: boolean = false;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
        const slug = params.get('ref')
        this.title.setTitle(`Ingredient (${slug}) - Cooking Meals`)

        this.slug = slug;

        if (slug) {
          try {
            this.loadingDataIngreDetail = true
            this.DetailIngreService.getIngreDetail(slug).subscribe(data => {
              if (data.meals) {
                this.ingredientDetail = data.meals.map((element: { idMeal: string, strMeal: string, strMealThumb: string }) => (
                  {
                      id: element?.idMeal,
                      name: element?.strMeal,
                      thumbnail: element?.strMealThumb
                  })
                )
                this.loadingDataIngreDetail = false;
              } else {
                this.ingredientDetail = []
              }
            })
          } catch (error) {
            console.log(error)
            this.loadingDataIngreDetail = false;
          }
        }
      })
  }

  backToHome() {
    this.router.navigate(['/'])
  }

  navigateToDetailsById(data: any) {
      this.DetailIngreById.setDetailIngreById(data)
      this.router.navigate(['/ingredient/detail'], { queryParams: { ref: data.id } })
  }
}
