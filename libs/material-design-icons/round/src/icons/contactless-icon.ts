import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-contactless-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.75 13.68c-.13.43-.62.63-1.02.45a.749.749 0 0 1-.4-.9c.12-.41.18-.83.17-1.24-.01-.41-.06-.8-.17-1.18-.1-.36.06-.75.4-.9.42-.19.91.04 1.04.49.15.51.22 1.03.23 1.57a6 6 0 0 1-.25 1.71zm3.14 1.59c-.17.41-.67.57-1.06.35a.755.755 0 0 1-.32-.94c.33-.77.49-1.63.49-2.56 0-.96-.18-1.89-.53-2.78-.14-.36.02-.76.36-.94.39-.2.87-.02 1.03.39.42 1.06.63 2.18.63 3.33.02 1.13-.19 2.19-.6 3.15zM15 16.6a.748.748 0 0 1-1.39-.56c.59-1.39.89-2.75.89-4.06 0-1.31-.3-2.65-.88-4.01-.16-.36.01-.78.36-.95.39-.2.85-.02 1.02.38.66 1.54 1 3.08 1 4.58s-.34 3.06-1 4.62z"
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
export class SiContactlessIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
