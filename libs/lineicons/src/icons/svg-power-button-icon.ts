import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-power-button-icon',
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
        d="M11.25 13.42C11.25 13.8342 11.5858 14.17 12 14.17C12.4142 14.17 12.75 13.8342 12.75 13.42V2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V13.42Z"
        fill="#323544"
      />
      <path
        d="M19.6248 12.8747C19.6248 9.44687 17.3628 6.54733 14.25 5.58733V4.02942C18.2014 5.0315 21.1248 8.61171 21.1248 12.8747C21.1248 17.9142 17.0394 21.9995 11.9999 21.9995C6.96043 21.9995 2.875 17.9142 2.875 12.8747C2.875 8.61165 5.79852 5.0314 9.75 4.02938V5.58728C6.63713 6.54722 4.375 9.44681 4.375 12.8747C4.375 17.0858 7.78883 20.4995 11.9999 20.4995C16.211 20.4995 19.6248 17.0858 19.6248 12.8747Z"
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
export class SvgPowerButtonIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
