import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://kurlylog-img.kurly.com/hdims/resize/%3E720x%3E720/quality/85/src/recipe/kimchi-army-base-stew-recipe-step-8.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test22',
      'https://static.wtable.co.kr/image/production/service/recipe/2431/70a672e4-d3f5-46ee-aef8-fb928ed52bda.jpg?size=800x800'
    ),
  ];

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
