import { Recipe} from '../receipes/recipe-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('A tasty recipe',
     'this is new',
     'https://assets3.thrillist.com/v1/image/2807352/size/tmg-facebook_social.jpg',
     [
       new Ingredient('Meat', 1),
       new Ingredient ('French Fries', 20)
     ]),
    new Recipe('A new tast',
     'This is a tasty burger',
     'http://ukcdn.ar-cdn.com/recipes/port960/ae3defd9-97fb-46bd-b2cd-d1fda3a6b038.jpg',
     [
       new Ingredient('Chicken', 2),
       new Ingredient('Steak', 3)
     ])
  ];
  constructor(private slService: ShoppingListService){

  }
  // tslint:disable-next-line: typedef
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }



  // tslint:disable-next-line: typedef
  getRecipes(){
    return this.recipes.slice();
  }

  // tslint:disable-next-line: typedef
  getRecipe(index: number){
    return this.recipes[index];
  }

  // tslint:disable-next-line: typedef
  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  // tslint:disable-next-line: typedef
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  // tslint:disable-next-line: typedef
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  // tslint:disable-next-line: typedef
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
