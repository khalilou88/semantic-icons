import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-filetype-key-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-filetype-key"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.21 11.85h-.87L.83 13.64H.79v-1.79H0v3.999h.791v-1.283l.41-.466 1.12 1.749h.951l-1.488-2.276 1.427-1.723Zm2.903 3.352h-1.79v-1.073h1.685v-.606H4.323v-1.025h1.79v-.648H3.538v3.999h2.575zm2.243-.888v1.535h-.794v-1.52L6.223 11.85H7.1l.853 1.696h.032l.855-1.696h.856z"
      />
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
export class SvgFiletypeKeyIcon {
  readonly class = input<string>('');
}
