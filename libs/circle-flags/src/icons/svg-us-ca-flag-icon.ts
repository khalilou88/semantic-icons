import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-us-ca-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#eee" d="M0 0h512v416l-256 32L0 416Z" />
        <path fill="#6da544" d="m396 280-132-10-140 14-8 12h299z" />
        <path
          fill="#584528"
          d="m389 273-19-77-55-31-95-4-75 27-16 35 11 19 26 1 10-11 24-4-12 31-19 25 17 2 19-12 26-24 22 11-13 17 26-2 9-16-4-19 21 4 1 23-14 8 1 6h26l34-30 27 16-6 8 1 5h17l10-7zM84 340h178v32H84Z"
        />
        <path fill="#d80027" d="M0 416h512v96H0Z" />
        <path fill="#584528" d="M288 340h140v32H288Z" />
        <path fill="#d80027" d="m71 182 69-50H55l69 50-26-81z" />
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
export class SvgUsCaFlagIcon {
  readonly class = input<string>('');
}
