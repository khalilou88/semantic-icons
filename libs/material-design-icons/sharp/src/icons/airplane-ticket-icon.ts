import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-airplane-ticket-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20V4zm-4.27 9.3-8.86 2.36-1.66-2.88.93-.25 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65a.967.967 0 0 1 1.18.68.988.988 0 0 1-.69 1.19z"
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
export class SiAirplaneTicketIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
