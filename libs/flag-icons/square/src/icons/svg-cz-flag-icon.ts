import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cz-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-cz"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v256H0z" />
      <path fill="#d7141a" d="M0 256h512v256H0z" />
      <path fill="#11457e" d="M300 256 0 56v400z" />
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
export class SvgCzFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
