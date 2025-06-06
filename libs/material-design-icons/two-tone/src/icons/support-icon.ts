import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-support-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.3 7.32 9.13 4.54a7.984 7.984 0 0 0-4.59 4.59l2.78 1.15c.51-1.38 1.6-2.46 2.98-2.96zm-2.98 6.4-2.78 1.15c.81 2.1 2.48 3.78 4.59 4.59l1.17-2.78a4.984 4.984 0 0 1-2.98-2.96zm9.35-3.45 2.78-1.15a8.007 8.007 0 0 0-4.58-4.58l-1.15 2.78c1.37.51 2.45 1.58 2.95 2.95zm.01 3.44a5.004 5.004 0 0 1-2.95 2.97l1.15 2.78c2.1-.81 3.77-2.48 4.58-4.58l-2.78-1.17z"
      opacity=".3"
    />
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.87 2.54c2.1.81 3.77 2.48 4.58 4.58l-2.78 1.15a4.982 4.982 0 0 0-2.95-2.94l1.15-2.79zm-5.74 0 1.17 2.78a5 5 0 0 0-2.98 2.97L4.54 9.13a7.984 7.984 0 0 1 4.59-4.59zm0 14.92a8.013 8.013 0 0 1-4.59-4.59l2.78-1.15a4.968 4.968 0 0 0 2.97 2.96l-1.16 2.78zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zm5.88 7.46-1.15-2.78a4.978 4.978 0 0 0 2.95-2.97l2.78 1.17a8.007 8.007 0 0 1-4.58 4.58z"
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
export class SiSupportIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
