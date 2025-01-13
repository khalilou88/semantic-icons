import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-micropython-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>MicroPython</svg:title>
    <svg:path
      d="M0 0h11.509v18.737h.982V0H24v24h-5.263V5.263h-.983V24H6.246V5.263l-.983.035V24H0zm22.246 19.509h-1.404v2.386h1.404z"
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
export class SiMicropythonIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2B2728');
}
