import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-opnsense-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>OPNsense</svg:title>
    <svg:path
      d="M5.25 0v5.25h13.5v13.5H24V7.5L16.5 0Zm13.5 18.75H5.25V5.25H0V16.5L7.5 24h11.25Z"
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
export class SiOPNsenseIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E44A20');
}
