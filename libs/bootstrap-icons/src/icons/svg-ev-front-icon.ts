import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ev-front-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-ev-front"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M9.354 4.243a.19.19 0 0 0-.085-.218.186.186 0 0 0-.23.034L6.051 7.246a.188.188 0 0 0 .136.316h1.241l-.673 2.195a.19.19 0 0 0 .085.218c.075.043.17.03.23-.034l2.88-3.187a.188.188 0 0 0-.137-.316H8.572z"
      />
      <path
        d="M4.819 2A2.5 2.5 0 0 0 2.52 3.515l-.792 1.848a.8.8 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 8.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V13.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V13.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413q0-.248-.049-.49l-.335-1.68a1.8 1.8 0 0 0-.964-1.261.8.8 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 2H4.82ZM3.44 3.91A1.5 1.5 0 0 1 4.82 3h6.362a1.5 1.5 0 0 1 1.379.91l.792 1.847a1.8 1.8 0 0 0 .853.904c.222.112.381.32.43.564l.336 1.679q.03.146.029.294v.413a1.48 1.48 0 0 1-1.408 1.484c-1.555.07-3.786.155-5.592.155s-4.037-.084-5.592-.155A1.48 1.48 0 0 1 1 9.611v-.413q0-.148.03-.294l.335-1.68a.8.8 0 0 1 .43-.563c.383-.19.685-.511.853-.904z"
      />
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
export class SvgEvFrontIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
