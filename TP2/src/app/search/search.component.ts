import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IData } from 'src/model/IData';
import { DataApiService } from '../dataApiService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataApiService: DataApiService) {}

  checkedMonsters = true;
  checkedCreaturesFood  = false;
  checkedCreaturesNoFood  = true;

  searchGroup = new FormGroup({
    controlEffect: new FormControl(),
    monstersGroup: new FormGroup({
        controlMonsters: new FormControl(true),
        controlCreaturesFood: new FormControl(false),
        controlCreaturesNoFood: new FormControl(true)
      })
  })

  listEffects: string[] = ["defense up", "speed up", 'attack up']
  filteredEffects: string[] = []
  
  listData: IData[] = [] 
  filteredData : IData[] = [] //Liste de toutes les data correspondant aux critères de recherche.

  ngOnInit(): void {
    this.getData();

    this.searchGroup.get('monstersGroup.controlMonsters')!
   .valueChanges.subscribe(res => { 
      this.checkedMonsters = res!
      this._updateListSlide()
   })

   this.searchGroup.get('monstersGroup.controlCreaturesFood')!
   .valueChanges.subscribe(res => { 
      this.checkedCreaturesFood = res!
      this._updateListSlide()
   })

   this.searchGroup.get('monstersGroup.controlCreaturesNoFood')!
   .valueChanges.subscribe(res => { 
      this.checkedCreaturesNoFood = res!
      this._updateListSlide()
   })

   this.searchGroup.get('controlEffect')!
   .valueChanges.subscribe(res => { 
      this.filteredEffects = res
      this._updateListSlide()
   })
  }

  displayEffect(): string{
    let toDisplay = "";
    if(this.filteredEffects.length > 0){
      toDisplay = this.filteredEffects[0];
      if(this.filteredEffects.length > 1) {
        toDisplay += "(+ " + (this.filteredEffects.length - 1) + " other.s)";
      }
    }
    return toDisplay;
  }

  private getData(): void {
    this.dataApiService.getAll()
    .subscribe({
      next: (data)  => { 
        this.listData = data;
        this._updateListSlide();
      },
      error: (e) => console.error(e),
      complete: () => console.info('end load specific item')
    })
  }

  private _updateListSlide(): void{
    this.filteredData = this._filterListSlide()
    this.filteredData = this._filterListEffect()
  }

  private _filterListSlide(): IData[]{
    return this.listData.filter(option => 
      (option.category === "monster" && this.checkedMonsters) ||
      (option.category === "creatureNoFood" && this.checkedCreaturesNoFood) ||
      (option.category === "creatureFood" && this.checkedCreaturesFood && this.filteredEffects.indexOf(option.cooking_effect!))
    )
  }

  private _filterListEffect(): IData[]{
    if(this.filteredEffects.length !== 0){
      return this.listData.filter(option => 
        this.filteredEffects.indexOf(option.cooking_effect!) !== -1
      )
    }
    return this.listData;
  }

}
