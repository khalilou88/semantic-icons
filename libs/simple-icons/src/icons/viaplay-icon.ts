import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-viaplay-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Viaplay</svg:title>
    <svg:path
      d="M1.2766 6.6383C.4742 8.2432 0 10.0669 0 12s.4742 3.7568 1.2766 5.3617L12 12ZM12 0C9.0456 0 6.3465 1.0578 4.231 2.845l12.5471 6.7477v4.8146L4.231 21.155C6.31 22.9422 9.0456 24 12 24c6.6383 0 12-5.3617 12-12S18.6383 0 12 0Z"
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
export class SiViaplayIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FE365F');
}
