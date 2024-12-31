import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dk-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-dk"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#c8102e" d="M0 0h512.1v512H0z" />
      <path fill="#fff" d="M144 0h73.1v512H144z" />
      <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDkFlagIcon {
  readonly class = input<string>('');
}
