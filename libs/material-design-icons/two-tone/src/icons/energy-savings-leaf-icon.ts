import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-energy-savings-leaf-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.1 7.01C5.74 8.32 5 10.1 5 12c0 3.86 3.14 7 7 7 1.87 0 3.63-.73 4.95-2.05A6.96 6.96 0 0 0 19 12V5h-7c-1.84 0-3.58.71-4.9 2.01zm6.78.11c.14.14.16.36.04.52l-2.44 3.33 4.05.4c.44.04.63.59.3.89l-5.16 4.63c-.16.15-.41.14-.56-.01a.397.397 0 0 1-.04-.52l2.44-3.33-4.05-.4a.514.514 0 0 1-.3-.89l5.16-4.63c.16-.15.41-.14.56.01z"
      opacity=".3"
    />
    <svg:path
      d="M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61L3 19.59 4.41 21l1.97-1.97A9.012 9.012 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3h-9zm7 9c0 1.87-.73 3.63-2.05 4.95A6.96 6.96 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-1.9.74-3.68 2.1-4.99A6.94 6.94 0 0 1 12 5h7v7z"
    />
    <svg:path
      d="m8.46 12.63 4.05.4-2.44 3.33c-.11.16-.1.38.04.52.15.15.4.16.56.01l5.16-4.63c.33-.3.15-.85-.3-.89l-4.05-.4 2.44-3.33c.11-.16.1-.38-.04-.52a.405.405 0 0 0-.56-.01l-5.16 4.63c-.32.3-.14.85.3.89z"
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
export class SiEnergySavingsLeafIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
