import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dk-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#c8102e" d="M0 0h640.1v480H0z" />
    <svg:path fill="#fff" d="M205.7 0h68.6v480h-68.6z" />
    <svg:path fill="#fff" d="M0 205.7h640.1v68.6H0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDkFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
