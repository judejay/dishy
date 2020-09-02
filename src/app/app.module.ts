import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeDetailComponent } from './receipe-detail/receipe-detail.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService} from '../app/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './receipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './receipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './receipes/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from '../app/shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeDetailComponent,
    ReceipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService],
    bootstrap: [AppComponent],
})
export class AppModule { }
