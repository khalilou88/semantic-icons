import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-speedometer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M425.7 118.25A240 240 0 0076.32 447l.18.2c.33.35.64.71 1 1.05.74.84 1.58 1.79 2.57 2.78a41.17 41.17 0 0060.36-.42 157.13 157.13 0 01231.26 0 41.18 41.18 0 0060.65.06l3.21-3.5.18-.2a239.93 239.93 0 00-10-328.76zM240 128a16 16 0 0132 0v32a16 16 0 01-32 0zM128 304H96a16 16 0 010-32h32a16 16 0 010 32zm48.8-95.2a16 16 0 01-22.62 0l-22.63-22.62a16 16 0 0122.63-22.63l22.62 22.63a16 16 0 010 22.62zm149.3 23.1l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14zm31.72-23.1a16 16 0 01-22.62-22.62l22.62-22.63a16 16 0 0122.63 22.63zm65.88 227.6zM416 304h-32a16 16 0 010-32h32a16 16 0 010 32z"
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
export class SiSpeedometerIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
