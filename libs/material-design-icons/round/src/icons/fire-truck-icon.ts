import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fire-truck-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m22.9 10.69-1.44-4.32A2.01 2.01 0 0 0 19.56 5H19V4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-2c-1.1 0-2 .9-2 2v4H3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c1.1 0 2-.9 2-2v-4.68c0-.21-.03-.42-.1-.63zM7 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3-8V7h5.56l1.33 4H14z"
    />
    <svg:path
      d="M10.25 8.5H10v-2h.25c.41 0 .75-.34.75-.75S10.66 5 10.25 5h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75H2v2h-.25c-.41 0-.75.34-.75.75s.34.75.75.75h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-5 0H3.5v-2h1.75v2zm3.25 0H6.75v-2H8.5v2z"
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
export class SiFireTruckIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
