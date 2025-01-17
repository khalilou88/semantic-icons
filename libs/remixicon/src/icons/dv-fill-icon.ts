import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-dv-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 14.7453C2.18652 13.4804 1 11.3787 1 9C1 5.13401 4.13401 2 8 2C11.866 2 15 5.13401 15 9C15 11.3787 13.8135 13.4804 12 14.7453V21C12 21.5523 11.5523 22 11 22H5C4.44772 22 4 21.5523 4 21V14.7453ZM8 14C10.7614 14 13 11.7614 13 9C13 6.23858 10.7614 4 8 4C5.23858 4 3 6.23858 3 9C3 11.7614 5.23858 14 8 14ZM7 18V20H9V18H7ZM8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12ZM14 17V15.7083C15.8412 14.0604 17 11.6655 17 9C17 6.69494 16.1334 4.59227 14.7083 3H21C21.5523 3 22 3.44772 22 4V16C22 16.5523 21.5523 17 21 17H14ZM18 7V9H20V7H18Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDvFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
