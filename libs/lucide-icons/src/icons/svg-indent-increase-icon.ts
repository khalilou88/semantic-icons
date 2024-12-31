import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-indent-increase-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- @license lucide-static v0.469.0 - ISC -->
    <svg
      class="lucide lucide-indent-increase"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12H11" />
      <path d="M21 18H11" />
      <path d="M21 6H11" />
      <path d="m3 8 4 4-4 4" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIndentIncreaseIcon {
  readonly class = input<string>('');
}
