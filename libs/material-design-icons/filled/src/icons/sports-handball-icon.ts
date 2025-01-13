import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sports-handball-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.27 6c-.55.95-.22 2.18.73 2.73.95.55 2.18.22 2.73-.73.55-.95.22-2.18-.73-2.73-.95-.55-2.18-.22-2.73.73z"
    />
    <svg:path
      d="m15.84 10.41-2.6-1.5c-2.38-1.38-3.2-4.44-1.82-6.82l-1.73-1C8.1 3.83 8.6 7.21 10.66 9.4l-5.15 8.92 1.73 1 1.5-2.6 1.73 1-3 5.2 1.73 1 6.29-10.89a5.002 5.002 0 0 1 .31 5.46l1.73 1c1.6-2.75 1.28-6.58-1.69-9.08zM12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05a1.501 1.501 0 0 0-1.5 2.6z"
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
export class SiSportsHandballIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
