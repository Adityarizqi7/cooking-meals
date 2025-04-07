import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './page/home/home.component';
import { DetailIngredientComponent } from './page/detail-ingredient/detail-ingredient.component';
import { DetailIngredientByIdComponent } from './page/detail-ingredient-by-id/detail-ingredient-by-id.component';
import { SearchMealComponent } from './page/search/search-meal/search-meal.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component:HomeComponent
            },
            {
                path: 'ingredient/menu',
                component: DetailIngredientComponent,
            },
            {
                path: 'ingredient/detail',
                component: DetailIngredientByIdComponent,
            },
            {
                path: 'search-meal',
                component: SearchMealComponent,
            }
        ]
    }
];
