import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cigarette-off-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- @license lucide-static v0.469.0 - ISC -->
    <svg
      class="lucide lucide-cigarette-off"
      [class]="svgClass()"
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
      <path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
      <path d="M18 8c0-2.5-2-2.5-2-5" />
      <path d="m2 2 20 20" />
      <path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
      <path d="M22 8c0-2.5-2-2.5-2-5" />
      <path d="M7 12v4" />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCigaretteOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
