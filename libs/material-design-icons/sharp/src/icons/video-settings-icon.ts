import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-video-settings-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M3 6h18v5h2V4H1v16h11v-2H3z" />
    <svg:path
      d="M15 12 9 8v8zm7.72 5.57 1.23-.98-1.25-2.17-1.47.58a3.44 3.44 0 0 0-.75-.42L20.25 13h-2.5l-.24 1.58c-.26.11-.51.26-.74.42l-1.48-.58-1.25 2.17 1.24.99c-.03.29-.04.58-.01.86l-1.23.98 1.25 2.17 1.48-.59c.23.17.48.31.75.42l.23 1.58h2.5l.24-1.58c.26-.11.51-.26.74-.42l1.48.58 1.25-2.17-1.24-.99c.03-.28.03-.57 0-.85zM19 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
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
export class SiVideoSettingsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
