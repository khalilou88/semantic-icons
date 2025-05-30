import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-highlight-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.29 14.29 9 17v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4l2.71-2.71a.99.99 0 0 0 .29-.71V10c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3.59c0 .26.11.52.29.7zM12 2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1zM4.21 5.17c.39-.39 1.02-.39 1.42 0l.71.71a.996.996 0 1 1-1.41 1.41l-.72-.71a.996.996 0 0 1 0-1.41zm13.46.71.71-.71a.996.996 0 1 1 1.41 1.41l-.71.71a.996.996 0 1 1-1.41-1.41z"
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
export class SiHighlightIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
