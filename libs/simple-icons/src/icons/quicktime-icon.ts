import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-quicktime-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>QuickTime</svg:title>
    <svg:path
      d="M12.002 0a11.998 12 0 106.629 22l1.98 1.97h3.139l.25-.25v-3.15l-2-1.98A11.938 11.94 0 0024 12 11.998 12 0 0012.002 0m0 4.2a7.799 7.8 0 016.949 11.33l-5.25-5.26a2.404 2.404 0 10-3.4 3.4l5.27 5.26a7.759 7.76 0 01-3.57.87 7.799 7.8 0 010-15.6z"
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
export class SiQuicktimeIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1C69F0');
}
