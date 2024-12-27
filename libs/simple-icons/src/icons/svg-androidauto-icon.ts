import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-androidauto-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Android Auto</title>
      <path
        d="M12 0c-.6 0-1.11.32-1.39.8L.48 18.4a1.6 1.6 0 0 0 1.39 2.4h2l7.7-13.58.43-.77 8.13 14.35h2a1.6 1.6 0 0 0 1.39-2.4L13.39.8A1.6 1.6 0 0 0 12 0zm0 7.47l-9.07 16 .54.53L12 20.8l8.53 3.2.54-.53z"
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
export class SvgAndroidautoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
