import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{ name: string, amount: number }>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    this.ingredientAdded.emit({ name: this.nameInputRef.nativeElement.value, amount: this.amountInputRef.nativeElement.value });
  }

}
