import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#333" d="M512 512 301.3 226.6 0 0v512z" />
      <svg:path fill="#a2001d" d="m0 0 512 512V0z" />
      <svg:path
        fill="#eee"
        d="m195 346 4.2 12.9h13.6l-11 8 4.2 12.8-11-7.9-11 7.9 4.2-12.9-11-8h13.6zm-34.6-123.7 7 21.5h22.5L171.7 257l7 21.5-18.3-13.3-18.2 13.3 6.9-21.5-18.2-13.2h22.5zm0 157.4 7 21.5h22.5l-18.2 13.2 7 21.6-18.3-13.4-18.2 13.4 6.9-21.6-18.2-13.2h22.5zm66-101.2 7 21.5H256l-18.2 13.3 6.9 21.4-18.2-13.2-18.3 13.2 7-21.4-18.3-13.3h22.5zm-132 0 7 21.5h22.5l-18.2 13.3 7 21.4-18.3-13.2-18.3 13.2 7-21.4L64.8 300h22.5z"
      />
      <svg:path
        fill="#ffda44"
        d="M430.3 189a67 67 0 0 0-42.6-19.7l48.2-37.6a89.7 89.7 0 0 0-70.3-26A67.2 67.2 0 0 0 348.5 76l-19.2 38.2a28 28 0 0 0-4.8-6.3 28 28 0 1 0-39.7 39.7 28 28 0 0 0 6.3 4.8L253 171.5a67.2 67.2 0 0 0 29.6 17.2 89.7 89.7 0 0 0 26 70.2l42.2-54.2a16.8 16.8 0 0 1 11.9-4.9c4.4 0 8.7 1.7 12 5a16.8 16.8 0 0 1 4.8 11.9c0 4.5-1.7 8.8-4.9 12l15.9 15.9a39.1 39.1 0 0 0 3.7-51.4 44.7 44.7 0 0 1 20.2 11.6 45 45 0 0 1 0 63.6l15.9 15.9a67 67 0 0 0 0-95.4z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPgFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
