import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kitchen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 2.01 6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM17 20H7c-.55 0-1-.45-1-1v-7.02c0-.55.45-1 1-1h10c.55 0 1 .45 1 1V19c0 .55-.45 1-1 1zm0-11H7c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1zM9 5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm0 7c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1z"
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
export class SiKitchenIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
