import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sports-baseball-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.81 6.28C2.67 7.9 2 9.87 2 12s.67 4.1 1.81 5.72C6.23 16.95 8 14.68 8 12S6.23 7.05 3.81 6.28zm16.38 0C17.77 7.05 16 9.32 16 12s1.77 4.95 4.19 5.72C21.33 16.1 22 14.13 22 12s-.67-4.1-1.81-5.72z"
    />
    <svg:path
      d="M14 12c0-3.28 1.97-6.09 4.79-7.33C17.01 3.02 14.63 2 12 2S6.99 3.02 5.21 4.67C8.03 5.91 10 8.72 10 12s-1.97 6.09-4.79 7.33C6.99 20.98 9.37 22 12 22s5.01-1.02 6.79-2.67A8.002 8.002 0 0 1 14 12z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSportsBaseballIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
