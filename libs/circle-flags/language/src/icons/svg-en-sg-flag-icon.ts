import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-en-sg-flag-icon',
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
        <path
          fill="#eee"
          d="M512 0 0 256v256l23-8 22 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54z"
        />
        <path
          fill="#d80027"
          d="M0 0v256h256l-48 48v208h96V304h208v-96H304L512 0H0zm176 336L0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"
        />
        <path
          fill="#eee"
          d="M156 134a78 78 0 0 1 61-76 78 78 0 0 0-17-2 78 78 0 1 0 17 154 78 78 0 0 1-61-76Z"
        />
        <path
          fill="#0052b4"
          d="M512 68 404 176h108ZM404 336l108 108V336Zm-228 68L68 512h108zm160 0v108h108z"
        />
        <path
          fill="#eee"
          d="m241 106 39-28h-48l39 28-15-46Zm45 33 39-28h-48l39 28-15-46zm-17 53 39-28h-48l39 28-15-46zm-56 0 39-28h-48l39 28-15-46zm-17-53 39-28h-48l39 28-15-46z"
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
export class SvgEnSgFlagIcon {
  readonly class = input<string>('');
}
