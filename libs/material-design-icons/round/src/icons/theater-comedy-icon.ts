import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-theater-comedy-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 2h-8c-1.1 0-2 .9-2 2v3.5h1.5c1.1 0 2 .9 2 2v4.95c1.04.48 2.24.68 3.5.47 2.93-.49 5-3.17 5-6.14V4c0-1.1-.9-2-2-2zm-7 4.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm4.85 4.38h-3.72c-.38 0-.63-.41-.44-.75.39-.66 1.27-1.13 2.3-1.13s1.91.47 2.3 1.14c.19.33-.06.74-.44.74zM19 7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
    <svg:path
      d="M11 9H3c-1.1 0-2 .9-2 2v4.79c0 3.05 2.19 5.77 5.21 6.16C9.87 22.42 13 19.57 13 16v-5c0-1.1-.9-2-2-2zm-7 4.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm5.3 3.25c-.38.67-1.27 1.14-2.3 1.14s-1.91-.47-2.3-1.14c-.19-.34.06-.75.44-.75h3.72c.38 0 .63.41.44.75zM9 14.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
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
export class SiTheaterComedyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
