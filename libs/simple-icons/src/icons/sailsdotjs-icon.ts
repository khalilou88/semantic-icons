import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sailsdotjs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Sails.js</svg:title>
    <svg:path
      d="M2.23828 24S-6.9375 9.39844 11.9375 0v24H2.23828M14.85938 24V9.125s3.01171 4.91406 9.1328 14.875h-9.1328"
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
export class SiSailsdotjsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#14ACC2');
}
