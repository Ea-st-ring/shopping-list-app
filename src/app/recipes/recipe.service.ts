import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://kurlylog-img.kurly.com/hdims/resize/%3E720x%3E720/quality/85/src/recipe/kimchi-army-base-stew-recipe-step-8.jpg',
      [new Ingredient('Meat', 5), new Ingredient('Kimchi', 10)]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test22',
      'https://static.wtable.co.kr/image/production/service/recipe/2431/70a672e4-d3f5-46ee-aef8-fb928ed52bda.jpg?size=800x800',
      [new Ingredient('Mushroom', 5), new Ingredient('Romaine', 10)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredient(ingredients);
  }
}
