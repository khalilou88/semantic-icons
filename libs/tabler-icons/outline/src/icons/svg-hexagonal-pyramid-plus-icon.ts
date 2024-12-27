import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hexagonal-pyramid-plus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-hexagonal-pyramid-plus"
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
        d="M18.642 12.04l-5.804 -9.583a.996 .996 0 0 0 -1.676 0l-7.846 12.954a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374 .373 .88 .583 1.408 .583h4.982"
      />
      <path d="M12 2l-5 18.9" />
      <path d="M12 2l3.304 12.489" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
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
export class SvgHexagonalPyramidPlusIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
