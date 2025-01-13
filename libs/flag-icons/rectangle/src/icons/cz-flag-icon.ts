import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h640v240H0z" />
    <svg:path fill="#d7141a" d="M0 240h640v240H0z" />
    <svg:path fill="#11457e" d="M360 240 0 0v480z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCzFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
