import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tk-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-tk"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#00247d" d="M0 0h512v512H0z" />
      <path
        fill="#fed100"
        d="M90.7 384.2c-5.3 0 50-29.5 96.4-67.2 60.7-49.5 191.5-128.7 230-141.5 4-1.3-8.2 6.8-9.8 9.5-41.1 48.6-8.3 140.3 43 186.4 15.4 11.8 14.6 12.4 43.2 13.6v2.7zm-3.3 5.4s-3.9 2.8-3.9 4.9c0 2.3 4.4 5.4 4.4 5.4l397.3 4.4 7.3-4.9-10.2-6.3z"
      />
      <path
        fill="#fff"
        d="m105.5 116.6-4 12.1 10.4-7.5 10.3 7.5-4-12.1 10.4-7.5h-12.8l-3.9-12.2-4 12.2H95.2zm77.8 57.1 8.6-6.2h-10.6l-3.3-10.1-3.3 10.1h-10.6l8.6 6.2-3.3 10.1 8.6-6.2 8.6 6.2zm-144.7 13-3.9-12.1-4 12.1H18l10.3 7.5-4 12.1 10.4-7.5 10.3 7.5-3.9-12.1 10.3-7.5zm77.9 121.9-4.6-14.2-4.6 14.2H92.4l12 8.7-4.6 14.2 12.1-8.8 12 8.8-4.6-14.2 12-8.7z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTkFlagIcon {
  readonly class = input<string>('');
}
