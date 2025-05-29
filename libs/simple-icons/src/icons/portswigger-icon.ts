import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-portswigger-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>PortSwigger</svg:title>
    <svg:path
      d="M0 0v24h10.718v-3.805l3.496-4.272h-3.496v-5.205H4.427l6.291-7.767V0Zm13.282 0v3.884L9.786 8.155h3.496v5.205h6.291l-6.291 7.767V24H24V0Z"
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
export class SiPortswiggerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF6633');
}
