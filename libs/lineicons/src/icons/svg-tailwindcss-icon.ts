import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tailwindcss-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.00001 9.96875C7.66657 7.26052 9.33344 5.90625 12 5.90625C16 5.90625 16.5 8.95312 18.5 9.46093C19.8334 9.79958 21 9.29176 22 7.9375C21.3334 10.6457 19.6665 12 17 12C13 12 12.5 8.95312 10.5 8.44531C9.16658 8.10667 8 8.61448 7.00001 9.96875ZM2 16.0625C2.66656 13.3543 4.33343 12 7.00001 12C11 12 11.5 15.0469 13.5 15.5547C14.8334 15.8933 16 15.3855 17 14.0312C16.3334 16.7395 14.6666 18.0937 12 18.0937C8 18.0937 7.50001 15.0469 5.50001 14.5391C4.16656 14.2004 3 14.7082 2 16.0625Z"
        fill="#323544"
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
export class SvgTailwindcssIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
