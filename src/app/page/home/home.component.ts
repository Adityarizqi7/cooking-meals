import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../models/ingredient';
import { Router, RouterModule } from '@angular/router';
import { IngredientsService } from '../../service/ingredients.service';
import { DetailIngredientServiceService } from '../../service/detail-ingredient-service.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    showCountData: number = 18;
    loadingDataIngre: boolean = false
    ingredients: Ingredient[] = []
    search: string = ''

    showPopupVisibility: boolean = false;

    splittedINgredients: Ingredient[] = []

    constructor(
        private DetailIngreService: DetailIngredientServiceService,
        private ingredientsService: IngredientsService,
        private router: Router
    ) {}

    ngOnInit(): void {
        try {
            this.DetailIngreService.clearIngredientDetail()
            this.loadingDataIngre = true;
            this.ingredientsService.getAllIngredients().subscribe(data => {
                this.ingredients = data.meals.map((element: { idIngredient: string, strIngredient: string, strDescription: string}) => (
                    {
                        id: element?.idIngredient,
                        name: element?.strIngredient,
                        description: element?.strDescription
                    }
                ))
                this.splittedINgredients = this.ingredients.slice(0, this.showCountData)
                this.loadingDataIngre = false
            })
        } catch (error) {
            this.loadingDataIngre = false
        }

        // this.splittedINgredients = this.ingredients.slice()
    }

    loadMoreData() {
        this.showCountData += this.showCountData;
        this.splittedINgredients = this.ingredients.slice(0, this.showCountData)
    }

    navigateToDetail( data: { name: string, description: string}, event: MouseEvent) {
        event.stopPropagation()
        this.DetailIngreService.setIngredientDetail(data)
        this.router.navigate(['/ingredient/menu'], { queryParams: { ref: data.name } })
    }

    handleSearch() {
        this.router.navigate(['/search-meal'], { queryParams: { ref: this.search }})
    }
}
