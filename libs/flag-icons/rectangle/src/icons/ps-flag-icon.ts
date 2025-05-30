import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ps-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#009639" d="M0 0h640v480H0z" />
    <svg:path fill="#fff" d="M0 0h640v320H0z" />
    <svg:path d="M0 0h640v160H0z" />
    <svg:path fill="#ed2e38" d="m0 0 320 240L0 480Z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPsFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
