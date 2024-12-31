import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-thermometer-sun-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- @license lucide-static v0.469.0 - ISC -->
    <svg
      class="lucide lucide-thermometer-sun"
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
      <path d="M12 9a4 4 0 0 0-2 7.5" />
      <path d="M12 3v2" />
      <path d="m6.6 18.4-1.4 1.4" />
      <path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      <path d="M4 13H2" />
      <path d="M6.34 7.34 4.93 5.93" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgThermometerSunIcon {
  readonly class = input<string>('');
}
