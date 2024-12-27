import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-webhook-off-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- @license lucide-static v0.469.0 - ISC -->
    <svg
      class="lucide lucide-webhook-off"
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
      <path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" />
      <path d="M9 3.4a4 4 0 0 1 6.52.66" />
      <path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" />
      <path d="M20.3 20.3a4 4 0 0 1-2.3.7" />
      <path d="M18.6 13a4 4 0 0 1 3.357 3.414" />
      <path d="m12 6 .6 1" />
      <path d="m2 2 20 20" />
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgWebhookOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
