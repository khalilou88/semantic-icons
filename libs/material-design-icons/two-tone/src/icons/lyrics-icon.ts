import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lyrics-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 4v14l2-2h9v-4.03c-.62-.83-1-1.85-1-2.97s.38-2.14 1-2.97V4H4zm6 10H6v-2h4v2zm3-3H6V9h7v2zm0-3H6V6h7v2z"
      opacity=".3"
    />
    <svg:path d="M6 12h4v2H6zm0-6h7v2H6z" />
    <svg:path
      d="M15 11.97V16H6l-2 2V4h11v2.03c.52-.69 1.2-1.25 2-1.6V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9c1.1 0 2-.9 2-2v-2.42a5.16 5.16 0 0 1-2-1.61z"
    />
    <svg:path
      d="M6 9h7v2H6zm14-2.82c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V3h2V1h-4v5.18z"
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
export class SiLyricsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
