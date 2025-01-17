import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-library-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      x="32"
      y="96"
      width="64"
      height="368"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M112 224h128M112 400h128"
    />
    <svg:rect
      x="112"
      y="160"
      width="128"
      height="304"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="256"
      y="48"
      width="96"
      height="416"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:path
      d="M422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89z"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
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
export class SiLibraryOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
