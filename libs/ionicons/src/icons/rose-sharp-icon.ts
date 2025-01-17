import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-rose-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M448 112s-17.62 0-30.51 1.39c-19 2-42.06 8-59.73 13.22-35.06 10.39-69.33 23.92-107.85 42.59-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.3C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.32 116-41.43 28.35-26.35 44-63.39 44-104.29 0-25-6.19-47-12.17-68.22-12.59-44.69-23.46-83.29 24.71-144.13C432.75 132.62 448 112 448 112zM219 119.55C168.47 92.08 104.72 80 80 80c0 0 23.23 28.19 29.15 55.4s6.54 48.61 2.91 88.6c17.94-20.48 40.59-37.15 69.32-53.73l4.48-2.6C208 154.8 216.23 150 236 140.41c2.88-1.4 5.74-2.76 8.58-4.11A170.77 170.77 0 00219 119.55zM345.25 48s-42.53.36-86.12 21.3a280.36 280.36 0 00-32.27 18.27q3.73 1.89 7.4 3.88c3.44 1.87 7.09 4 10.9 6.29a189.7 189.7 0 0131.46 24.16c24.57-10.41 73-26.1 90.77-31.28-8-19.15-22.14-42.62-22.14-42.62zM176 16c-16 10.83-33.24 41.1-33.24 41.1a494.22 494.22 0 0148.92 15.25l17.65-11.56c8.18-5.35 16.55-10.29 25-14.77C234.31 46 202.59 24.17 176 16z"
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
export class SiRoseSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
