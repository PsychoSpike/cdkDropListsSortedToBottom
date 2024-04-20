import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
transferArrayItem} from '@angular/cdk/drag-drop';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CdkDropList, CdkDrag, CdkDragPlaceholder,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cdkDroplistsSortedToBottom';
  movies1 = [
    'List1 - item1 | The Force Awakens',
    'List1 - item2 | The Last Jedi',
    'List1 - item3 | The Rise of Skywalker',
  ];
  movies2 = [
    'List2 - item1 | The Phantom Menace',
    'List2 - item2 | Attack of the Clones',
    'List2 - item3 | Revenge of the Sith',
    'List2 - item4 | The Wookie rebellion',

  ];
  movies3 = [

    'List3 - StartItem1 | A New Hope',
    'List3 - StartItem2 | The Empire Strikes Back',
    'List3 - StartItem3 | Return of the Jedi',
    'List3 - StartItem4 | The Jedi left again'
  ];

  movies4 = [

    'List4 - StartItem1 | A New Hope',
    'List4 - StartItem2 | The Empire Strikes Back',
    'List4 - StartItem3 | Return of the Jedi',
    'List4 - StartItem4 | The Jedi left again'
  ];

  CardPlaceablePredicate(){
    return true;
  }

  addToEndPredicate(index: number, item: CdkDrag<number>,itemList: CdkDropList){
    return index === itemList.data.length;
  }

  /**
   * Predicate function that only allows even numbers to be
   * sorted into even indices and odd numbers at odd indices.
   */
  sortPredicate(index: number, item: CdkDrag<number>) {
    return (index + 1) % 2 === item.data % 2;
  }

  drop(event: CdkDragDrop<string[]>) {
  
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

  }
}

