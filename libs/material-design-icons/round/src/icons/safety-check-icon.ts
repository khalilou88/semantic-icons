import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-safety-check-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m11.3 2.26-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.83 3.13 9.37 7.43 10.75.37.12.77.12 1.14 0 4.3-1.38 7.43-5.91 7.43-10.75v-4.7a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm2-3c-.2.2-.51.2-.71 0l-1.65-1.65a.51.51 0 0 1-.15-.35V9.5c.01-.28.23-.5.51-.5s.5.22.5.5v2.29l1.5 1.5c.2.2.2.51 0 .71z"
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
export class SiSafetyCheckIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
