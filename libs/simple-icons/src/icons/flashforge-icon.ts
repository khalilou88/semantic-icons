import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flashforge-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Flashforge</svg:title>
    <svg:path
      d="m.025 12 11.98-12 11.97 12-11.97 12Zm14.544 2.672-2.574 2.584v5.916L23.177 11.97 11.995.76v5.136L9.402 8.53v6.123l5.157-5.196Z"
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
export class SiFlashforgeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
