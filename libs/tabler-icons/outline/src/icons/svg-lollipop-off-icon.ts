import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lollipop-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-lollipop-off"
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
        d="M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416 -1.57a7 7 0 1 0 -9.884 -9.915"
      />
      <path d="M21 10a3.5 3.5 0 0 0 -7 0" />
      <path d="M12.71 12.715a3.5 3.5 0 0 1 -5.71 -2.715" />
      <path
        d="M14 17c.838 0 1.607 -.294 2.209 -.785m1.291 -2.715a3.5 3.5 0 0 0 -3.5 -3.5"
      />
      <path d="M14 3a3.5 3.5 0 0 0 -3.5 3.5" />
      <path d="M3 21l6 -6" />
      <path d="M3 3l18 18" />
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
export class SvgLollipopOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
