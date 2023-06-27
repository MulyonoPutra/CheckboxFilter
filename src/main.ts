import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <form (ngSubmit)="submitFilter()">
  <div class="grid grid-cols-2 gap-4">
    <div *ngFor="let option of filterOptions" class="flex items-center">
      <input type="checkbox" id="{{ option.id }}" [(ngModel)]="option.selected" [ngModelOptions]="{standalone: true}" class="mr-2">
      <label for="{{ option.id }}">{{ option.label }}</label>
    </div>
  </div>
  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4">Submit</button>
</form>
  `,
})
export class App {
  name = 'Angular';

  filterOptions: FilterOption[] = [
    { id: 'option1', label: 'Option 1', selected: false },
    { id: 'option2', label: 'Option 2', selected: false },
    { id: 'option3', label: 'Option 3', selected: false },
    // Add more options if needed
  ];

  submitFilter() {
    const selectedOptions = this.filterOptions.filter(
      (option) => option.selected
    );
    alert(JSON.stringify(selectedOptions));
  }
}

bootstrapApplication(App);

interface FilterOption {
  id: string;
  label: string;
  selected: boolean;
}
