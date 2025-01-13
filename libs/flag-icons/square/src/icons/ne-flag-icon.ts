import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ne-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#0db02b" d="M0 0h512v512H0z" />
    <svg:path fill="#fff" d="M0 0h512v341.3H0z" />
    <svg:path fill="#e05206" d="M0 0h512v170.7H0z" />
    <svg:circle cx="256" cy="256" r="72.5" fill="#e05206" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNeFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
