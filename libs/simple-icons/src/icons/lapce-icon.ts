import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lapce-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Lapce</svg:title>
    <svg:path
      d="M3.802 1.267 1.608 0v24L8 20.31v-2.535L3.802 20.2Zm4.208 13.9V6.231L18.003 12l-7.798 4.503v2.533L22.392 12 5.806 2.424V16.44Zm5.598-3.231L10.205 9.97v3.93Z"
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
export class SiLapceIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3B82F6');
}
