import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-it-21-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
    >
      <defs>
        <mask
          id="a"
          width="576"
          height="576"
          x="-32"
          y="-32"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
      </defs>
      <g mask="url(#a)">
        <path fill="#d80027" d="M0 0h512v512H0V0Z" />
        <path
          fill="#eee"
          fill-rule="evenodd"
          d="M512 204.8H310.9V0H201.1v204.8H0v102.4h201.1V512h109.8V307.2H512V204.8z"
        />
        <path
          fill="#0052b4"
          d="M256 544c-77 0-149.3-30-203.6-84.4C-2 405.3-32 333-32 256S-2 106.7 52.4 52.4C106.7-2 179-32 256-32S405.3-2 459.6 52.4C514 106.7 544 179 544 256s-30 149.3-84.4 203.6A286.1 286.1 0 0 1 256 544Zm0-512c-59.8 0-116 23.3-158.4 65.6C55.3 140 32 196.2 32 256s23.3 116 65.6 158.4C140 456.7 196.2 480 256 480s116-23.3 158.4-65.6C456.7 372 480 315.8 480 256s-23.3-116-65.6-158.4A222.5 222.5 0 0 0 256 32Z"
        />
        <path
          fill="#0052b4"
          d="m432 176-32-64H112l-32 64h64l-20-40h120l-20 40h64l-20-40h120l-20 40h64Z"
        />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIt21FlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
