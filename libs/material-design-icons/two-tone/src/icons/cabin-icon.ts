import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cabin-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.94 7h-3.89L12 5.52 13.94 7zm-6.5 2h9.12L18 10.1v.9H6v-.9L7.44 9zM18 13v2H6v-2h12zM6 19v-2h12v2H6z"
      opacity=".3"
    />
    <svg:path
      d="M10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm1.94 4h-3.89L12 5.52 13.94 7zm-6.5 2h9.12L18 10.1v.9H6v-.9L7.44 9zM18 13v2H6v-2h12zM6 19v-2h12v2H6z"
    />
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
export class SiCabinIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
