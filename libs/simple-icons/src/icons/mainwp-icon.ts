import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-mainwp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>MainWP</svg:title>
    <svg:path
      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 2.4004c1.3251 0 2.4004 1.0752 2.4004 2.4004a2.397 2.397 0 0 1-.7031 1.6953 2.4 2.4 0 0 1-.5957.4355L16.08 19.1992 12 21.6016l-4.08-2.4024 2.9784-12.2676a2.4 2.4 0 0 1-.5937-.4355 2.397 2.397 0 0 1-.7031-1.6953c0-1.3252 1.0732-2.4004 2.3984-2.4004"
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
export class SiMainwpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#7FB100');
}
