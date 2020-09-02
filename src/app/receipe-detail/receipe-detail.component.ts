import { Component, OnInit } from '@angular/core';
import { Recipe } from './../receipes/recipe-model';
import { RecipeService } from '../receipes/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
   recipe: Recipe;
   id: number;
  constructor(private recipeSrvice: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {

               }

  ngOnInit(): void{
this.route.params.subscribe(
  (params: Params) => {
    this.id = +params.id;
    this.recipe = this.recipeSrvice.getRecipe(this.id);
  }
);
  }

  onAddShoppingList(): void{
    this.recipeSrvice.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(): void{
    this.router.navigate(['edit'], {relativeTo: this.route});
 // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});

  }

  onDeleteRecipe(): void{
    this.recipeSrvice.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
