import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-de-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fc0" d="M0 341.3h512V512H0z" />
    <svg:path fill="#000001" d="M0 0h512v170.7H0z" />
    <svg:path fill="red" d="M0 170.7h512v170.6H0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
