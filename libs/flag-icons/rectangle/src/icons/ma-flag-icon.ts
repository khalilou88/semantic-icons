import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ma-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#c1272d" d="M640 0H0v480h640z" />
    <svg:path
      fill="none"
      stroke="#006233"
      stroke-width="11.7"
      d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMaFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
