import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-pinterest-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-brand-pinterest"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3.34a10 10 0 0 1 -8.512 18.023l2.364 -5.315a3.5 3.5 0 0 0 2.398 .952c2.708 0 4.75 -2.089 4.75 -5a6 6 0 1 0 -11.64 2.041a1 1 0 1 0 1.88 -.682a4 4 0 1 1 7.76 -1.36c0 1.818 -1.156 3.001 -2.75 3.001c-.609 0 -1.153 -.361 -1.478 -1.022l1.142 -2.572a1 1 0 0 0 -1.828 -.812l-4.392 9.882a10 10 0 0 1 -4.694 -8.476l.005 -.324a10 10 0 0 1 14.995 -8.336"
      />
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
export class SvgBrandPinterestIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
