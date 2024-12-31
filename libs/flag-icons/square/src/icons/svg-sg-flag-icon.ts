import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sg-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sg"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="sg-a">
          <path fill-opacity=".7" d="M27.7 0h708.6v708.7H27.7z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        clip-path="url(#sg-a)"
        transform="translate(-20)scale(.72249)"
      >
        <path fill="#fff" d="M0 0h1063v708.7H0z" />
        <path fill="#df0000" d="M0 0h1063v354.3H0z" />
        <path
          fill="#fff"
          d="M245.2 59.4a124.6 124.6 0 0 0 1.1 243.9 126.9 126.9 0 1 1-1.1-243.9"
        />
        <path
          fill="#fff"
          d="m202 162.4-18.9-13.8 23.5-.2 7.2-22.3 7.5 22.3h23.4l-18.8 14 7.2 22.3L214 171l-19 13.8zm26 76.9-19-13.8 23.5-.2 7.3-22.3 7.4 22.2h23.5l-19 14 7.3 22.3-19-13.6-19 13.8zm86.3-.6-19-13.8 23.4-.2 7.3-22.3 7.4 22.3H357l-18.9 14 7.3 22.3-19.1-13.7-19 13.8zm25.7-76.2-19-13.8 23.5-.2 7.2-22.3 7.5 22.2h23.4l-18.8 14 7.2 22.3-19.1-13.6-19 13.8zM271.7 112l-19-13.8 23.5-.2 7.3-22.3 7.4 22.3h23.5l-19 14 7.3 22.2-19-13.6-19 13.8z"
        />
      </g>
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
export class SvgSgFlagIcon {
  readonly class = input<string>('');
}
