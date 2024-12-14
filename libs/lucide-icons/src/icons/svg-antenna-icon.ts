import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-antenna-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- @license lucide-static v0.468.0 - ISC -->
    <svg
      class="lucide lucide-antenna"
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
      <path d="M2 12 7 2" />
      <path d="m7 12 5-10" />
      <path d="m12 12 5-10" />
      <path d="m17 12 5-10" />
      <path d="M4.5 7h15" />
      <path d="M12 16v6" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAntennaIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
