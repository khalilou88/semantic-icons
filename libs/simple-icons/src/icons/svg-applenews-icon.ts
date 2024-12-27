import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-applenews-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Apple News</title>
      <path
        d="M0 12.9401c2.726 4.6726 6.3944 8.385 11.039 11.0582H1.4164C.634 23.9983 0 23.3639 0 22.5819v-9.6418ZM0 1.4138C0 .6337.632.0018 1.4116.0018h4.8082L24 17.7583v4.773c0 .3891-.1544.762-.4295 1.0373a1.4674 1.4674 0 0 1-1.037.4296h-4.774L0 6.2416M12.9634.0017h9.6182A1.4187 1.4187 0 0 1 24 1.4205v9.6256C21.2648 6.4935 17.6157 2.7745 12.9634.0017Z"
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
export class SvgApplenewsIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
