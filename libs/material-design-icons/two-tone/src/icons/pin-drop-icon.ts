import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pin-drop-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-opacity=".3"
      d="M12 3C9.19 3 6 5.11 6 9.13c0 2.68 2 5.49 6 8.44 4-2.95 6-5.77 6-8.44C18 5.11 14.81 3 12 3z"
    />
    <svg:path
      d="M12 4c1.93 0 5 1.4 5 5.15 0 2.16-1.72 4.67-5 7.32-3.28-2.65-5-5.17-5-7.32C7 5.4 10.07 4 12 4m0-2C8.73 2 5 4.46 5 9.15c0 3.12 2.33 6.41 7 9.85 4.67-3.44 7-6.73 7-9.85C19 4.46 15.27 2 12 2z"
    />
    <svg:path
      d="M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 20h14v2H5v-2z"
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
export class SiPinDropIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
