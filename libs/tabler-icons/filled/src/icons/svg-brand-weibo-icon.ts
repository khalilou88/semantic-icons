import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-weibo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-brand-weibo"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M4.972 8.183c2.81 -2.987 6.162 -4.207 8.006 -2.24c.298 .316 .554 .773 .736 1.266l.127 -.031c2.064 -.469 4 1.287 3.817 3.544l-.005 .036l.15 .057c1.46 .574 2.14 1.355 2.193 3.081l.004 .231c0 3.776 -4.107 6.873 -9 6.873c-4.854 0 -9 -2.72 -9 -6.565c0 -2.04 1.068 -4.222 2.972 -6.252"
      />
      <path
        d="M16 3a6 6 0 0 1 6 6v1a1 1 0 0 1 -2 0v-1a4 4 0 0 0 -4 -4h-1a1 1 0 0 1 0 -2z"
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBrandWeiboIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
