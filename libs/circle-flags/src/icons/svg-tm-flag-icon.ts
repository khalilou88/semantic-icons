import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tm-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#496e2d"
          d="M0 0h66.8l67.8 32.3L200.3 0H512v512H200.3l-70.2-34.1L66.8 512H0z"
        />
        <path fill="#d80027" d="M66.8 0h133.5v512H66.8z" />
        <g fill="#eee">
          <path
            d="M374.4 193.1a78 78 0 0 0-31.9-92.3 78.2 78.2 0 0 1 16.3 4 78 78 0 1 1-52.6 146.6 78.1 78.1 0 0 1-15.1-7.3 78 78 0 0 0 83.3-51zm-69.8-102-11 14.2-16.8-6 10 14.8-10.9 14 17.2-5 10 14.9.6-18 17.2-5-16.9-6z"
          />
          <path
            d="m334.1 137.3-11 14-16.8-6 10.1 14.8-11 14.2 17.2-5 10.1 14.7.5-17.8 17.2-5-16.8-6zM252.5 108l-11 14.1-16.8-6 10 14.7-10.9 14.2 17.2-5 10 14.7.6-17.8 17.1-5-16.8-6zm-1.2 52.7-11 14.2-16.8-6 10 14.7-10.9 14.2 17.2-5 10 14.7.6-17.8 17.1-5-16.8-6zm50.2 18-11 14.2-16.8-6 10 14.7-10.9 14.2 17.2-5 10 14.7.6-17.8 17.2-5-16.9-6z"
          />
        </g>
        <path
          fill="#eee"
          d="M117.8 134.8 95.4 118v-12l38.2-28 15.8-.1 22.3 16.7v11.5l-38.1 28.7z"
        />
        <path
          fill="#ff9811"
          d="M133.6 78h-15.8L95.4 94.5V106h38.2zm0 56.8h15.8l22.3-16.7v-12h-38.1z"
        />
        <path
          fill="#496e2d"
          d="m117.8 284.4-22.4-16.6v-23.6l22.4-16.6h31.6l22.3 16.6v23.6l-22.3 16.6zm54.7 36.7h-9.7v-9.8h-17.1l-12.1-12-12.1 12h-17.2v9.8h-9.7v19.5h9.7v9.7h17.2l12 12.1 12.2-12.1h17v-9.7h9.8zm0-149.7h-9.7v-9.7h-17.1l-12.1-12.1-12.1 12h-17.2v9.8h-9.7V191h9.7v9.8h17.2l12 12 12.2-12h17V191h9.8z"
        />
        <g fill="#d80027">
          <path d="M122.4 244.9h22.3V267h-22.3z" />
          <circle cx="133.6" cy="181.2" r="11.1" />
          <circle cx="133.6" cy="330.8" r="11.1" />
        </g>
        <path
          fill="#eee"
          d="m117.8 434-22.4-16.8v-12l38.2-28 15.8-.1 22.3 16.7v11.5L133.6 434z"
        />
        <path
          fill="#ff9811"
          d="M133.6 377.2h-15.8l-22.4 16.5v11.5h38.2zm0 56.8h15.8l22.3-16.7v-12h-38.1z"
        />
      </g>
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
export class SvgTmFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
