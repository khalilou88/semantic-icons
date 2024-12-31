import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-td-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-td"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#002664" d="M0 0h171.2v512H0z" />
        <path fill="#c60c30" d="M340.8 0H512v512H340.8z" />
        <path fill="#fecb00" d="M171.2 0h169.6v512H171.2z" />
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
export class SvgTdFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
