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
    <svg:path fill="#0db02b" d="M0 0h640v480H0z" />
    <svg:path fill="#fff" d="M0 0h640v320H0z" />
    <svg:path fill="#e05206" d="M0 0h640v160H0z" />
    <svg:circle cx="320" cy="240" r="68" fill="#e05206" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNeFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
