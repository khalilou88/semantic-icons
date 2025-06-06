import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kaios-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>KaiOS</svg:title>
    <svg:path
      d="M17.3419.0001a3.6735 3.6735 0 0 0-3.647 3.6735 3.6727 3.6727 0 0 0 3.6735 3.6734 3.6735 3.6735 0 1 0-.0265-7.3469zM4.6233.16a2.7459 2.7459 0 0 0-2.7475 2.7473v18.167a2.7474 2.7474 0 1 0 5.4942 0V2.9071A2.749 2.749 0 0 0 4.6233.16zm6.9494 7.2078a2.729 2.729 0 0 0-2.237 4.2947l7.8107 11.1541a2.729 2.729 0 1 0 4.4706-3.1307L13.8062 8.5311a2.729 2.729 0 0 0-2.2335-1.1634z"
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
export class SiKaiosIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#6F02B5');
}
