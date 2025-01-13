import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-woman-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="4" r="2" />
    <svg:path
      d="m16.45 14.63-2.52-6.32c-.32-.79-1.08-1.3-1.94-1.31-.85 0-1.62.51-1.94 1.31l-2.52 6.32c-.25.66.24 1.37.94 1.37H10v5c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5h1.53c.7 0 1.19-.71.92-1.37z"
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
export class SiWomanIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
