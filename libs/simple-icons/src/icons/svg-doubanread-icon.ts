import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-doubanread-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Douban Read</title>
      <path
        d="M15.328 5.553c-2.648.906-4.008 4.372-7.101 4.833C4.827 10.833.752 7.205 0 6c0 0 .526.906 1.28 2.105C5.205 14.297 7.772 18.224 12 18.75c5.28.68 8.146-4.535 8.826-6.64.607-1.732 1.733-1.66 2.494-1.433l.68.227s-2.729-7.402-8.688-5.36l.016.008z"
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
export class SvgDoubanreadIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
