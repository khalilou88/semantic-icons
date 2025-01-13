import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-netdata-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Netdata</svg:title>
    <svg:path
      d="M14.764 21.827H9.922L0 2.173h14.084c5.476.01 9.913 4.565 9.916 10.183-.009 5.235-4.14 9.47-9.238 9.47z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNetdataIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00AB44');
}
