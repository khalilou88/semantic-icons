import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sports-baseball-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.61 7.22C4.6 8.55 4 10.2 4 12s.6 3.45 1.61 4.78a5.975 5.975 0 0 0 0-9.56z"
      opacity=".3"
    />
    <svg:path
      d="M14 12c0-2.52 1.17-4.77 3-6.24C15.63 4.66 13.89 4 12 4s-3.63.66-5 1.76c1.83 1.47 3 3.71 3 6.24s-1.17 4.77-3 6.24c1.37 1.1 3.11 1.76 5 1.76s3.63-.66 5-1.76c-1.83-1.47-3-3.72-3-6.24z"
      opacity=".3"
    />
    <svg:path
      d="M18.39 7.22a5.975 5.975 0 0 0 0 9.56C19.4 15.45 20 13.8 20 12s-.6-3.45-1.61-4.78z"
      opacity=".3"
    />
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.61 16.78C4.6 15.45 4 13.8 4 12s.6-3.45 1.61-4.78a5.975 5.975 0 0 1 0 9.56zM12 20c-1.89 0-3.63-.66-5-1.76 1.83-1.47 3-3.71 3-6.24S8.83 7.23 7 5.76C8.37 4.66 10.11 4 12 4s3.63.66 5 1.76c-1.83 1.47-3 3.71-3 6.24s1.17 4.77 3 6.24A7.963 7.963 0 0 1 12 20zm6.39-3.22a5.975 5.975 0 0 1 0-9.56C19.4 8.55 20 10.2 20 12s-.6 3.45-1.61 4.78z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSportsBaseballIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
