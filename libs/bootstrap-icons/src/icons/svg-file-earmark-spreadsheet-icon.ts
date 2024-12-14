import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-file-earmark-spreadsheet-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-file-earmark-spreadsheet"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h3v2zm4 0v-2h3v1a1 1 0 0 1-1 1zm3-3h-3v-2h3zm-7 0v-2h3v2z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFileEarmarkSpreadsheetIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
