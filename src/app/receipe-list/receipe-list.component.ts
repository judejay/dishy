import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../receipes/recipe-model';
import { RecipeService } from '../receipes/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {

               }


  ngOnInit(): void{
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(): void{
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
