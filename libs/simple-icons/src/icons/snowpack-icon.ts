import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-snowpack-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Snowpack</svg:title>
    <svg:path
      d="M23.8094 19.7512l-10.8-16.7999a1.2002 1.2002 0 00-2.0189 0L.1906 19.7512a1.2 1.2 0 00-.0439 1.224 1.2002 1.2002 0 001.0534.6247H22.8c.4391 0 .843-.2396 1.0534-.6251a1.1994 1.1994 0 00-.044-1.2236zM12 5.8193L15.202 10.8H12l-2.4 2.4-1.4272-1.4272z"
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
export class SiSnowpackIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2E5E82');
}
