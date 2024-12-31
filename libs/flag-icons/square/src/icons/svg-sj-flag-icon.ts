import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sj-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sj"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#ef2b2d" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M128 0h128v512H128z" />
      <path fill="#fff" d="M0 192h512v128H0z" />
      <path fill="#002868" d="M160 0h64v512h-64z" />
      <path fill="#002868" d="M0 224h512v64H0z" />
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
export class SvgSjFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
