import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-actigraph-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ActiGraph</svg:title>
    <svg:path
      d="M10.18899 0 .8597 24h4.15078L12 4.97502h.0304L18.9587 24h4.1816L14.18736.91564C13.97372.36626 13.44452 0 12.85444 0ZM12 13.71434a2.47223 2.47223 0 0 0-2.4723 2.47211A2.47223 2.47223 0 0 0 12 18.65876a2.47223 2.47223 0 0 0 2.47211-2.4723 2.47223 2.47223 0 0 0-2.4721-2.47212z"
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
export class SiActigraphIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3A4259');
}
