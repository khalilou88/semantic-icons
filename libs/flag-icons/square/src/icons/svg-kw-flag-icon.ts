import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kw-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-kw"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="kw-a">
          <path fill-opacity=".7" d="M0 0h496v496H0z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#kw-a)"
        transform="scale(1.0321)"
      >
        <path fill="#fff" d="M0 165.3h992.1v165.4H0z" />
        <path fill="#f31830" d="M0 330.7h992.1v165.4H0z" />
        <path fill="#00d941" d="M0 0h992.1v165.4H0z" />
        <path fill="#000001" d="M0 0v496l247.5-165.3.5-165.5z" />
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
export class SvgKwFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
