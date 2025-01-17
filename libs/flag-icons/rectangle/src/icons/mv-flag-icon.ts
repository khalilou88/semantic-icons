import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-mv-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#d21034" d="M0 0h640v480H0z" />
    <svg:path fill="#007e3a" d="M120 120h400v240H120z" />
    <svg:circle cx="350" cy="240" r="80" fill="#fff" />
    <svg:circle cx="380" cy="240" r="80" fill="#007e3a" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMvFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
