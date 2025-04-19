import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-library-selector',
  imports: [CommonModule],
  template: `
    <div class="mb-6">
      <label
        class="block text-sm font-medium text-gray-700 mb-2"
        for="library-selector"
      >
        Select Icon Library
      </label>
      <select
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        id="library-selector"
        [value]="selectedLibrary"
        (change)="onLibrarySelect($event)"
      >
        <option *ngFor="let lib of libraries" [value]="lib.id">
          {{ lib.name }}
        </option>
      </select>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibrarySelector {
  @Input() libraries: { id: string; name: string }[] = [];
  @Input() selectedLibrary = '';
  @Output() libraryChange = new EventEmitter<string>();

  onLibrarySelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.libraryChange.emit(select.value);
  }
}
