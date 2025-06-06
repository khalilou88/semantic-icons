import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-clubforce-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Clubforce</svg:title>
    <svg:path
      d="M1.4 0C.624 0 0 .624 0 1.4v21.2c0 .776.624 1.4 1.4 1.4h21.2c.776 0 1.4-.624 1.4-1.4V1.4c0-.776-.624-1.4-1.4-1.4Zm4.778 5.5h9.61l-2.83 2.112H8.331v3.472L6.18 12.72V5.5Zm11.644 1.317v7.415L11.96 18.5l-4.786-3.629 1.675-1.317 3.111 2.354 3.19-2.392-3.23-2.234 1.834-1.355 1.955 1.355v-2.87Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClubforceIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#191176');
}
