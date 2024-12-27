import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-car-4wd-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-car-4wd"
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M5 3m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z"
      />
      <path
        d="M5 15m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z"
      />
      <path
        d="M15 3m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z"
      />
      <path
        d="M15 15m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z"
      />
      <path d="M9 18h6" />
      <path d="M9 6h6" />
      <path d="M12 6.5v-.5v12" />
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
export class SvgCar4wdIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
