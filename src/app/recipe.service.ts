import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const RECIPE_URL = 'ws://localhost:8765/';

export interface Recipe {
  recipe: string
}

@Injectable()
export class RecipeService {
  public recipes: Subject<Recipe>;

  constructor(wsService: WebsocketService) {
    this.recipes = <Subject<Recipe>>wsService
            .connect(RECIPE_URL)
            .map((response:MessageEvent): Recipe => {
              let data = response.data
              return {
                recipe: data
              }
            });
  }
}
