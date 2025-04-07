import { Component, OnInit } from '@angular/core';
import { DetailIngredientByIdService } from '../../service/details/detail-ingredient-by-id.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailIngredientById } from '../../models/detail-ingredient-by-id';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-ingredient-by-id',
  imports: [CommonModule],
  templateUrl: './detail-ingredient-by-id.component.html',
  styleUrl: './detail-ingredient-by-id.component.scss'
})
export class DetailIngredientByIdComponent implements OnInit {

    loadingIngredientDetail: boolean = false
    ingredientDetail: DetailIngredientById[] = []

    constructor(
        private DetailIngreById: DetailIngredientByIdService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.queryParamMap.subscribe(params => {
            const id = params.get('ref')
            console.log(id)
            if (id) {
              try {
                this.loadingIngredientDetail = true;
                this.DetailIngreById.getDataIngredientById(id).subscribe((data: any) => {
                    console.log(data, 'hhaa')
                    this.ingredientDetail = data.meals
                    this.loadingIngredientDetail = false
                })
              } catch (error) {
                this.loadingIngredientDetail = false
              }
            }
        })
    }

    navigateToYoutube(link: string) {
      window.open(link);
    }

    backToMenuIngredient(data: any) {
      this.router.navigate(['/ingredient/menu'], { queryParams: { ref:  data.strCategory} })
    }
}
