import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="mb-6">
      <label
        class="block text-sm font-medium text-gray-700 mb-2"
        for="icon-search"
      >
        Search Icons
      </label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 sm:text-sm border border-gray-300 rounded-md"
          id="icon-search"
          [(ngModel)]="searchText"
          (input)="onSearchInput($event)"
          type="text"
          placeholder="Search by name or tag..."
        />
        <button
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
          *ngIf="searchText"
          (click)="clearSearch()"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBar {
  @Output() searchChange = new EventEmitter<string>();
  private readonly searchTerms = new Subject<string>();
  searchText = '';

  constructor() {
    this.searchTerms
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => {
        this.searchChange.emit(term);
      });
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
    this.searchTerms.next(this.searchText);
  }

  clearSearch(): void {
    this.searchText = '';
    this.searchTerms.next('');
  }
}
