import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wrong-location-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 10V3.26c-.65-.17-1.32-.26-2-.26-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-.41-.04-.81-.09-1.2H14zm-2 3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    />
    <svg:path
      d="m22.54 2.88-1.42-1.42L19 3.59l-2.12-2.13-1.42 1.42L17.59 5l-2.13 2.12 1.42 1.42L19 6.41l2.12 2.13 1.42-1.42L20.41 5z"
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
export class SiWrongLocationIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
