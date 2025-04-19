import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { IconDisplay } from '../components/icon-display';
import { LibrarySelector } from '../components/library-selector';
import { SearchBar } from '../components/search-bar';
import { IconService, LibraryIdType } from '../services/icon.service';

@Component({
  selector: 'app-home-page',
  imports: [LibrarySelector, SearchBar, IconDisplay],
  template: `
    <div class="min-h-screen bg-gray-100">
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">{{ title }}</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-gray-200 rounded-lg p-6">
              <!-- Library Selector -->
              <app-library-selector
                [libraries]="availableLibraries"
                [selectedLibrary]="selectedLibrary"
                (libraryChange)="onLibraryChange($event)"
              ></app-library-selector>

              <!-- Search Bar -->
              <app-search-bar
                (searchChange)="onSearch($event)"
              ></app-search-bar>

              <!-- Icon Display -->
              <app-icon-display
                [library]="selectedLibrary"
                [searchQuery]="searchQuery"
              ></app-icon-display>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {
  title = 'SVG Icon Library Showcase';
  selectedLibrary: LibraryIdType = 'heroicons';
  searchQuery = '';
  availableLibraries = [
    { id: 'heroicons', name: 'Heroicons' },
    { id: 'feather', name: 'Feather Icons' },
    { id: 'material', name: 'Material Icons' },
    { id: 'bootstrap', name: 'Bootstrap Icons' },
    { id: 'fontawesome', name: 'Font Awesome' },
  ];

  constructor(public iconService: IconService) {}

  onLibraryChange(libraryId: string): void {
    this.selectedLibrary = libraryId as LibraryIdType;
    this.iconService.setCurrentLibrary(libraryId as LibraryIdType);
  }

  onSearch(query: string): void {
    this.searchQuery = query;
  }
}
