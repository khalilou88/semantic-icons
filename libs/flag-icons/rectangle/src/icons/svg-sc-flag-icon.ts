import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sc-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sc"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v480H0Z" />
      <path fill="#d92223" d="M0 480V0h640v160z" />
      <path fill="#fcd955" d="M0 480V0h426.7z" />
      <path fill="#003d88" d="M0 480V0h213.3z" />
      <path fill="#007a39" d="m0 480 640-160v160z" />
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
export class SvgScFlagIcon {
  readonly class = input<string>('');
}
