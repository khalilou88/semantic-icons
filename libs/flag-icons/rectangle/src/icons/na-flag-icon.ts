import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-na-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="na-a">
        <svg:path fill-opacity=".7" d="M0 0h640v480H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g fill-rule="evenodd" clip-path="url(#na-a)">
      <svg:path fill="#fff" d="M0 0h640v480H0z" />
      <svg:path fill="#3662a2" d="m-26.4.2.8 345.6L512.5 0z" />
      <svg:path fill="#38a100" d="M666.4 479.6 665 120.3 122.3 479.8l544-.2z" />
      <svg:path
        fill="#c70000"
        d="m-26 371.8.4 108.2 117.5-.1L665.4 95.4l-.7-94.1-116-1L-26 371.7z"
      />
      <svg:path
        fill="#ffe700"
        d="m219.6 172-21.8-13.2-12.6 22.1-12.2-22.2-22 12.9.6-25.4-25.4.2 13.2-21.8-22.1-12.5 22.2-12.3-12.8-22 25.4.6-.1-25.5 21.7 13.2L186.3 44l12.2 22.2 22-12.9-.6 25.4 25.4-.2-13.2 21.8 22.1 12.5-22.2 12.3 12.8 22-25.4-.6z"
      />
      <svg:path
        fill="#3662a2"
        d="M232.4 112.4c0 25.6-20.9 46.3-46.6 46.3s-46.6-20.7-46.6-46.3 20.8-46.2 46.6-46.2 46.6 20.7 46.6 46.2"
      />
      <svg:path
        fill="#ffe700"
        d="M222.3 112.4a36.5 36.5 0 1 1-73 0 36.5 36.5 0 0 1 73 0"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNaFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
