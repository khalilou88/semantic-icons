import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-electric-scooter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74L17.49 1H12v2h3.89l1.4 6.25h-.01A6.008 6.008 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2zM5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
    <svg:path
      d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z"
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
export class SiElectricScooterIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
