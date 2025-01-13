import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-turn-slight-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.66 5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3.66c0 .55.45 1 1 1s1-.45 1-1V7.41l5 5V19c0 .55.45 1 1 1s1-.45 1-1v-6.58c0-.53-.21-1.04-.59-1.41l-5-5h1.24A1.02 1.02 0 0 0 11.66 5z"
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
export class SiTurnSlightLeftIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
