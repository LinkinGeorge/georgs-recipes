import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'angular2-markdown';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { DndModule } from 'ng2-dnd';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { MaterializeModule } from 'ng2-materialize';
import { FocusModule } from 'angular2-focus';

import { InlineHrefDirective } from 'ng-inline-href';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipePrintComponent } from './components/recipe-print/recipe-print.component';
import { ConverterComponent } from './components/converter/converter.component';

import { RecipeService } from './services/recipe.service';
import { WunderlistService } from './services/wunderlist.service';
import { CurrentQueryService } from './services/current-query.service';
import { ScrollService } from './services/scroll.service';

import { RecipeRoutingModule } from './recipes-routing.module';
import { CalcServingsPipe } from './pipes/calc-servings.pipe';
import { FilterRecipesPipe } from './pipes/filter-recipes.pipe';
import { DifficultyStringPipe } from './pipes/difficulty-string.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { SortRecipesPipe } from './pipes/sort-recipes.pipe';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';
import { NoVeggiesPipe } from './pipes/no-veggies.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutingModule,
    MarkdownModule,
    NguiAutoCompleteModule,
    MaterializeModule,
    DndModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    FocusModule.forRoot()
  ],
  exports: [
    InlineHrefDirective
  ],
  declarations: [
    RecipeDetailsComponent,
    RecipeFormComponent,
    RecipeListComponent,
    RecipeEditComponent,
    CalcServingsPipe,
    FilterRecipesPipe,
    DifficultyStringPipe,
    RecipePrintComponent,
    ConverterComponent,
    RoundPipe,
    SortRecipesPipe,
    ThumbnailPipe,
    InlineHrefDirective,
    NoVeggiesPipe
  ],
  entryComponents: [
    ConverterComponent
  ],
  providers: [
    RecipeService,
    WunderlistService,
    CurrentQueryService,
    ScrollService
  ]
})

export class RecipesModule {}