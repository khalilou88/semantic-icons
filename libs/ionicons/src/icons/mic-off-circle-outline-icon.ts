import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mic-off-circle-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80z"
    />
    <svg:path
      d="M352 369a15.93 15.93 0 01-11.84-5.24l-192-210a16 16 0 0123.68-21.52l192 210A16 16 0 01352 369zM352 248.22v-23.8a16.3 16.3 0 00-13.64-16.24c-9.88-1.48-18.36 6.51-18.36 16.12v23.92a43.35 43.35 0 01-3.07 15.91 4 4 0 00.76 4.16l19.19 21.1a2 2 0 003.19-.3A77.12 77.12 0 00352 248.22zM304 240v-64a48.14 48.14 0 00-48-48 48.08 48.08 0 00-41 23.1 4 4 0 00.47 4.77l84.42 92.86a2 2 0 003.46-1A47.84 47.84 0 00304 240zM246.57 285.2l-36.46-40.11a1 1 0 00-1.74.8 48.26 48.26 0 0037.25 41 1 1 0 00.95-1.69z"
    />
    <svg:path
      d="M287.55 352H272v-17.74a100.33 100.33 0 0012.53-3.06 2 2 0 00.89-3.26l-21.07-23.19a3.94 3.94 0 00-3.29-1.29c-1.69.15-3.39.24-5.06.24-36 0-64-29.82-64-55.48V224.4a16.26 16.26 0 00-15.61-16.4A15.91 15.91 0 00160 224v24.22c0 23.36 10.94 45.61 30.79 62.66A103.71 103.71 0 00240 334.26V352h-15.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00224 384h64a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMicOffCircleOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
