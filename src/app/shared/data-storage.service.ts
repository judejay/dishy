import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../receipes/recipe.service';
import { Recipe } from '../receipes/recipe-model';
import { map, tap } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class DataStorageService implements OnDestroy{
  constructor(private http: HttpClient, private recipeService: RecipeService){}


  // tslint:disable-next-line: typedef test-8e907

  // tslint:disable-next-line: typedef
  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://test-8e907.firebaseio.com/recipes.json',
       recipes)
       .subscribe(response => {
         console.log(response);
       });
  }

  // tslint:disable-next-line: typedef
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://test-8e907.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  ngOnDestroy(): void{
    console.log('Destroy recipes');
  }
}
