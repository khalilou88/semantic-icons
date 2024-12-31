import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-co-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-co"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#ffe800" d="M0 0h640v480H0z" />
        <path fill="#00148e" d="M0 240h640v240H0z" />
        <path fill="#da0010" d="M0 360h640v120H0z" />
      </g>
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
export class SvgCoFlagIcon {
  readonly class = input<string>('');
}
