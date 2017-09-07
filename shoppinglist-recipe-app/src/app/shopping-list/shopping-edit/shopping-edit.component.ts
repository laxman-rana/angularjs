import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("inputName") inputName : ElementRef;
  @ViewChild("inputAmount") inputAmount : ElementRef;

  @Output() ingredientAdd = new EventEmitter<Ingredient>(); 
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(){
    console.log("==>"+ this.inputName.nativeElement.value);
    const name = this.inputName.nativeElement.value;
    const amt = this.inputAmount.nativeElement.value;
    const newIngr = new Ingredient(name,amt);
    this.ingredientAdd.emit(newIngr);
  }

}
