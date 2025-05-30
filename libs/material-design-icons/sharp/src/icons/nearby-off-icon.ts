import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nearby-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.82 12.01 18.83 16l-1.81-1.81L19.2 12 12 4.8 9.81 6.99 8 5.17l3.99-3.99 10.83 10.83zm-1.63 9.18-1.41 1.41L16 18.83l-3.99 3.99L1.18 11.99 5.17 8 1.39 4.22 2.8 2.81l18.39 18.38zm-7-4.17-1.39-1.39-.8.8L7.58 12l.8-.8-1.4-1.39L4.8 12l7.2 7.2 2.19-2.18zM16.42 12 12 7.58l-.8.8 4.42 4.42.8-.8z"
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
export class SiNearbyOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
