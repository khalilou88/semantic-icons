import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gh-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#006b3f" d="M0 0h512v512H0z" />
    <svg:path fill="#fcd116" d="M0 0h512v341.3H0z" />
    <svg:path fill="#ce1126" d="M0 0h512v170.7H0z" />
    <svg:path
      fill="#000001"
      d="m256 170.7 55.5 170.6L166.3 236h179.4L200.6 341.3z"
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
export class SiGhFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
