import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ticket-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M1 4.5A1.5 1.5 0 0 1 2.5 3h11A1.5 1.5 0 0 1 15 4.5v1c0 .276-.227.494-.495.562a2 2 0 0 0 0 3.876c.268.068.495.286.495.562v1a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5v-1c0-.276.227-.494.495-.562a2 2 0 0 0 0-3.876C1.227 5.994 1 5.776 1 5.5v-1Zm9 1.25a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0v-1Zm.75 2.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    'aria-hidden': 'true',
    'data-slot': 'icon',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTicketIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
