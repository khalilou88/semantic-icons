import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-water-damage-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m11.33 3.6-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0zM12 16c-1.1 0-2-.9-2-2 0-.78.99-2.44 1.58-3.36.2-.31.64-.31.84 0 .59.92 1.58 2.58 1.58 3.36 0 1.1-.9 2-2 2z"
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
export class SiWaterDamageIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
