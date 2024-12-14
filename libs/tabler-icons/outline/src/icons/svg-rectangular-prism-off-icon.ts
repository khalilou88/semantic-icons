import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rectangular-prism-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-rectangular-prism-off"
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M8.18 8.18l-4.18 2.093c-.619 .355 -1 1.01 -1 1.718v5.018c0 .709 .381 1.363 1 1.717l4 2.008a2.016 2.016 0 0 0 2 0l7.146 -3.578m2.67 -1.337l.184 -.093c.619 -.355 1 -1.01 1 -1.718v-5.018a1.98 1.98 0 0 0 -1 -1.717l-4 -2.008a2.016 2.016 0 0 0 -2 0l-3.146 1.575"
      />
      <path d="M9 21v-7.5" />
      <path d="M9 13.5l3.048 -1.458m2.71 -1.296l5.742 -2.746" />
      <path d="M3.5 11l5.5 2.5" />
      <path d="M3 3l18 18" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRectangularPrismOffIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
