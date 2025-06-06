import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pulse-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M432 272a48.09 48.09 0 0 0-45.25 32h-39.22l-28.35-85.06a16 16 0 0 0-30.56.66l-44.51 155.76-52.33-314a16 16 0 0 0-31.3-1.25L99.51 304H48a16 16 0 0 0 0 32h64a16 16 0 0 0 15.52-12.12l45.34-181.37 51.36 308.12A16 16 0 0 0 239.1 464h.91a16 16 0 0 0 15.37-11.6l49.8-174.28 15.64 46.94A16 16 0 0 0 336 336h50.75A48 48 0 1 0 432 272"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPulseIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
