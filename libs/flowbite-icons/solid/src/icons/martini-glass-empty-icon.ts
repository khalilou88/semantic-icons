import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-martini-glass-empty-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="M5.00002 3c-.39238 0-.7485.22947-.91064.58678-.16213.35732-.10032.77643.15806 1.07172L11 12.3757V19H9.00002c-.55229 0-1 .4477-1 1s.44771 1 1 1H15c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2v-6.6243l6.7526-7.7172c.2584-.29529.3202-.7144.158-1.07172C19.7485 3.22947 19.3924 3 19 3H5.00002Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMartiniGlassEmptyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
