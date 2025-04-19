import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
  inject,
  viewChild,
} from '@angular/core';

import {
  ScCodeHighlighter,
  ScSheetConfig,
  ScSheetManager,
} from '@semantic-components/ui';
import { Icon } from '@semantic-icons/nx-generators';
import { Observable } from 'rxjs';

import { IconService } from '../services/icon.service';
import { SafeHtmlPipe } from './safe-html.pipe';

@Component({
  selector: 'app-icon-display',
  imports: [CommonModule, SafeHtmlPipe, ScCodeHighlighter],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Icon Grid -->
      <div class="bg-white shadow overflow-hidden rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            Available Icons
          </h3>

          <div
            class="text-gray-500 text-center py-8"
            *ngIf="(icons$ | async)?.length === 0"
          >
            No icons found matching your search criteria.
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <button
              class="p-3 border rounded-md cursor-pointer hover:bg-gray-50 flex flex-col items-center transition-colors"
              *ngFor="let icon of icons$ | async"
              [class.bg-indigo-50]="selectedIcon?.id === icon.id"
              [class.border-indigo-500]="selectedIcon?.id === icon.id"
              (click)="selectIcon(icon)"
            >
              <div
                class="h-12 w-12 flex items-center justify-center"
                [innerHTML]="icon.svgContent | safeHtml"
              ></div>

              <div class="mt-2 text-xs text-center text-gray-700">
                {{ icon.name }}
              </div>
            </button>
          </div>
        </div>
      </div>

      <ng-template #sheet>
        <!-- Icon Details -->
        <div class="">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Icon Details</h3>

            <div class="text-gray-500 text-center py-8" *ngIf="!selectedIcon">
              Select an icon to view details
            </div>

            <div class="space-y-4" *ngIf="selectedIcon">
              <div class="flex items-center justify-center py-4">
                <div
                  class="h-24 w-24"
                  [innerHTML]="selectedIcon.svgContent"
                ></div>
              </div>

              <div>
                <h4 class="text-sm font-medium text-gray-700">Name</h4>
                <p class="mt-1 text-gray-900">{{ selectedIcon.name }}</p>
              </div>

              <div>
                <h4 class="text-sm font-medium text-gray-700">Tags</h4>
                <div class="mt-1 flex flex-wrap gap-2">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    *ngFor="let tag of selectedIcon.tags"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div>
                <h4 class="text-sm font-medium text-gray-700">SVG Code</h4>
                <div class="mt-1 relative">
                  <pre
                    class="bg-gray-50 rounded-md p-3 text-xs overflow-x-auto"
                    >{{ selectedIcon.svgContent }}</pre
                  >
                  <button
                    class="absolute top-2 right-2 p-1 bg-white rounded-md shadow-sm border border-gray-300 hover:bg-gray-50"
                    (click)="copyToClipboard(selectedIcon.svgContent)"
                  >
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              @if (selectedIcon.componentContent) {
                <sc-code-highlighter
                  [code]="selectedIcon.componentContent"
                  language="angular-ts"
                />
              }
            </div>
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDisplay implements OnChanges {
  private readonly scSheetManager = inject(ScSheetManager);

  private readonly sheetRef = viewChild.required<TemplateRef<unknown>>('sheet');

  @Input() library = '';
  @Input() searchQuery = '';

  icons$: Observable<Icon[]>;
  selectedIcon: Icon | null = null;

  private readonly config = new ScSheetConfig();

  constructor(private readonly iconService: IconService) {
    this.icons$ = this.iconService.searchIcons('');

    this.config.side = 'right';
    this.config.width = '300';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery'] || changes['library']) {
      this.icons$ = this.iconService.searchIcons(this.searchQuery);
      this.selectedIcon = null;
    }
  }

  selectIcon(icon: Icon): void {
    this.selectedIcon = icon;

    this.openSheet();
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      },
    );
  }

  private openSheet() {
    this.scSheetManager.open(this.sheetRef(), this.config);
  }
}
